import type { CityBikeNetwork, Station } from '@/types';
import type { Feature, Point } from 'geojson';

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

type StationFeature = Feature<
	Point,
	{
		name: string;
		freeBikes: number;
		emptySlots: number;
		description: string;
	}
>;

export function getGeoJsonSourceFromStations(stations: Station[]) {
	return {
		type: 'FeatureCollection' as const,
		features: stations.map(
			(station): StationFeature => ({
				type: 'Feature' as const,
				geometry: {
					type: 'Point' as const,
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
			})
		),
	};
}
