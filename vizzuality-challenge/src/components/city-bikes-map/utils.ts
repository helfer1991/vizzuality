import type { CityBikeNetwork, Station } from '@/types';
import mapboxgl from 'mapbox-gl';
import { LngLatBounds, SourceSpecification } from 'mapbox-gl';

function isNetwork(item: CityBikeNetwork | Station): item is CityBikeNetwork {
	return (item as CityBikeNetwork).location !== undefined;
}

export function getBounds(items: CityBikeNetwork[] | Station[]): LngLatBounds {
	const coordinatesArr = items.map((item) => {
		let lng: number;
		let lat: number;

		if (isNetwork(item)) {
			lng = item.location.longitude;
			lat = item.location.latitude;
		} else {
			lng = item.longitude;
			lat = item.latitude;
		}

		return {
			lng,
			lat,
		};
	});

	return coordinatesArr.reduce(function (bounds, coord) {
		return bounds.extend(coord);
	}, new mapboxgl.LngLatBounds(coordinatesArr[0], coordinatesArr[0]));
}

export function getGeoJsonSource(
	networks: CityBikeNetwork[]
): GeoJSON.FeatureCollection {
	return {
		type: 'FeatureCollection',
		features: networks.map((n) => ({
			type: 'Feature',
			properties: {},
			geometry: {
				type: 'Point',
				coordinates: [n.location.longitude, n.location.latitude],
			},
		})),
	};
}

export function getGeoJsonSourceFromStations(stations: Station[]) {
	return {
		type: 'FeatureCollection',
		features: stations.map((station) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [station.longitude, station.latitude],
			},
			properties: {
				name: station.name,
				freeBikes: station.free_bikes,
				emptySlots: station.empty_slots,
				description: `
          <div class="p-2">
            <h3 class="font-semibold mb-2">${station.name}</h3>
            <div class="text-sm">
              <p>Free bikes: ${station.free_bikes}</p>
              <p>Empty slots: ${station.empty_slots}</p>
            </div>
          </div>
        `,
			},
		})),
	};
}
