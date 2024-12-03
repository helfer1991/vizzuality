'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import { getGeoJsonSource, getGeoJsonSourceFromStations } from './utils';
import mapboxgl from 'mapbox-gl';
import { useContext, useEffect, useRef } from 'react';
import mapStyle from './style.json';
import { CityBikeNetwork, Station } from '@/types';
import { CustomZoomControl, getCenterCoordinates } from './map-zoom';
import { LocationControl } from './location-control';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

type MapComponentProps = {
	stations?: Array<Station>;
	networks?: Array<CityBikeNetwork>;
	onStationClick?: (e: mapboxgl.MapMouseEvent & mapboxgl.MapEvent) => void;
};

export function MapComponent({
	stations,
	networks,
	onStationClick,
}: MapComponentProps) {
	const mapContainer = useRef(null);
	const map = useRef<mapboxgl.Map | null>(null);
	const sourceLoaded = useRef(false);

	useEffect(() => {
		if (map.current) return;

		map.current = new mapboxgl.Map({
			container: mapContainer.current!,
			style: mapStyle as any,
			center: stations ? getCenterCoordinates(stations) : [-8.6291, 41.1579],
			zoom: stations ? 9 : 4,
			projection: {
				name: 'mercator',
				center: [0, 30],
				parallels: [30, 30],
			},
		});

		map.current?.on('load', function () {
			if (!sourceLoaded.current) {
				const source = stations
					? getGeoJsonSourceFromStations(stations)
					: getGeoJsonSource(networks || []);

				map.current?.addSource('networks', {
					type: 'geojson',
					data: source,
				} as mapboxgl.GeoJSONSourceSpecification);

				map.current?.addLayer({
					id: 'networks',
					type: 'circle',
					source: 'networks',
					paint: {
						'circle-radius': 4,
						'circle-stroke-width': 1,
						'circle-color': 'hsla(19, 88%, 61%, 0.6)',
						'circle-stroke-color': 'hsla(19, 88%, 61%, 1)',
					},
				});

				sourceLoaded.current = true;
			}

			if (onStationClick) {
				map.current?.on('click', 'networks', onStationClick);

				map.current?.on('mouseenter', 'networks', () => {
					map.current?.getCanvas().style.setProperty('cursor', 'pointer');
				});

				map.current?.on('mouseleave', 'networks', () => {
					map.current?.getCanvas().style.setProperty('cursor', '');
				});
			}

			map.current?.addControl(new LocationControl(map.current), 'top-left');

			const zoomControl = new CustomZoomControl(map.current!);
			map.current?.addControl(zoomControl, 'top-right');
		});

		return () => {
			map.current?.remove();
			map.current = null;
			sourceLoaded.current = false;
		};
	}, []);

	useEffect(() => {
		if (!map.current || !sourceLoaded.current) return;

		const source = map.current.getSource('networks') as mapboxgl.GeoJSONSource;
		if (source) {
			const newData = stations
				? getGeoJsonSourceFromStations(stations)
				: getGeoJsonSource(networks || []);

			source.setData(newData);
		}
	}, [stations, networks]);

	return (
		<div className='relative'>
			<div
				ref={mapContainer}
				className='absolute top-0 bottom-0 w-full'
			></div>
		</div>
	);
}

export function Map() {
	const { cityBikeNetworks } = useContext(CityBikeNetworkContext);

	return <MapComponent networks={cityBikeNetworks} />;
}

export function StationsMap({ stations }: { stations: Station[] }) {
	const handleStationClick = (
		e: mapboxgl.MapMouseEvent & mapboxgl.MapEvent
	) => {
		const feature = e.features?.[0];
		if (!feature || feature.geometry.type !== 'Point') {
			console.warn('Feature is not a Point geometry');
			return;
		}

		const coordinates = feature.geometry.coordinates.slice() as [
			number,
			number
		];
		const { name, freeBikes, emptySlots } = feature.properties || {};

		const existingPopups = document.getElementsByClassName('mapboxgl-popup');
		if (existingPopups.length) {
			existingPopups[0].remove();
		}

		const popupContent = `
      <div class="p-4 min-w-[200px]">
        <h3 class="text-sm font-medium mb-3">
          ${name}
        </h3>
        <div class="space-y-2">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Bikes</span>
              <span>${freeBikes}</span>
            </div>
            <div class="w-full h-1 rounded-full bg-green-500"></div>
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>Slots</span>
              <span>${emptySlots}</span>
            </div>
            <div class="w-full h-1 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    `;

		const style = document.createElement('style');
		style.textContent = `
      .mapboxgl-popup-content {
        border-radius: 8px;
        padding: 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
      }
      .mapboxgl-popup-close-button {
        display: none;
      }
      .mapboxgl-popup-tip {
        border-top-color: white;
      }
    `;
		document.head.appendChild(style);

		new mapboxgl.Popup({
			closeButton: false,
			closeOnClick: true,
			offset: [0, -10],
			className: 'station-popup',
		})
			.setLngLat(coordinates)
			.setHTML(popupContent)
			.addTo(e.target as mapboxgl.Map);
	};

	return (
		<MapComponent
			stations={stations}
			onStationClick={handleStationClick}
		/>
	);
}
