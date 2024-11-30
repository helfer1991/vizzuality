'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import {
	getBounds,
	getGeoJsonSource,
	getGeoJsonSourceFromStations,
} from './utils';
import mapboxgl from 'mapbox-gl';
import { useContext, useEffect, useRef } from 'react';
import mapStyle from './style.json';
import { CityBikeNetwork, Station } from '@/types';
import { CustomZoomControl, getCenterCoordinates } from './map-zoom';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapComponentProps {
	stations?: Station[];
	networks?: CityBikeNetwork[];
	onStationClick?: (e: mapboxgl.MapMouseEvent & mapboxgl.MapEvent) => void;
}

export function MapComponent({
	stations,
	networks,
	onStationClick,
}: MapComponentProps) {
	const mapContainer = useRef(null);
	const map = useRef<mapboxgl.Map | null>(null);

	useEffect(() => {
		map.current = new mapboxgl.Map({
			container: mapContainer.current!,
			style: mapStyle as any,
			center: stations ? getCenterCoordinates(stations) : [-71.363, 44.475],
			zoom: stations ? 9 : 2,
			projection: {
				name: 'mercator',
				center: [0, 30],
				parallels: [30, 30],
			},
		});

		map.current?.on('load', function () {
			const source = stations
				? getGeoJsonSourceFromStations(stations)
				: getGeoJsonSource(networks || []);

			if (!map.current?.getSource('networks')) {
				map.current?.addSource('networks', {
					type: 'geojson',
					data: source,
				} as mapboxgl.GeoJSONSourceSpecification);
			}

			if (!map.current?.getLayer('networks')) {
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
			const zoomControl = new CustomZoomControl(map.current!);
			map.current?.addControl(zoomControl, 'top-right');
		});

		return () => {
			map.current?.remove();
		};
	}, [stations, networks, onStationClick]);

	useEffect(() => {
		if (
			!map.current ||
			(stations && stations.length === 0) ||
			(networks && networks.length === 0)
		)
			return;

		const padding = 40;
		map.current?.fitBounds(getBounds(stations || networks || []), {
			padding: { top: padding, right: padding, bottom: padding, left: padding },
		});
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
		const description = feature.properties?.description;

		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		if (description) {
			new mapboxgl.Popup()
				.setLngLat(coordinates)
				.setHTML(description)
				.addTo(e.target as mapboxgl.Map);
		}
	};

	return (
		<MapComponent
			stations={stations}
			onStationClick={handleStationClick}
		/>
	);
}
