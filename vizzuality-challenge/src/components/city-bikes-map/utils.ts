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

export function getGeoJsonSourceFromStations(
	stations: Station[]
): GeoJSON.FeatureCollection {
	return {
		type: 'FeatureCollection',
		features: stations.map((s) => ({
			type: 'Feature',
			properties: {
				description: `<div class="text-toreabay-800 text-base leading-7 mb-2">${s.name}</div><ul><li>Free bikes <strong>${s.free_bikes}</strong></li><li>Empty slots <strong>${s.empty_slots}</strong></ul>`,
			},
			geometry: {
				type: 'Point',
				coordinates: [s.longitude, s.latitude],
			},
		})),
	};
}
