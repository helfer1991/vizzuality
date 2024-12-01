import { CITYBIKES_API_URL } from './constants';
import type { CityBikeNetworkStations } from '@/types';
import { removeNumberingFromStationNames } from './utils';

export const getCityBikeNetworkStations = async (
	id: string
): Promise<CityBikeNetworkStations> => {
	// if (process.env.NODE_ENV === 'development') return mocknetworkStations.network

	try {
		const response = await fetch(`${CITYBIKES_API_URL}/${id}`);

		if (!response.ok) {
			throw new Error('Failed to fetch network stations');
		}

		const data = (await response.json()) as {
			network: CityBikeNetworkStations;
		};
		console.log('-----------');
		console.log(removeNumberingFromStationNames(data.network));
		console.log('-----------');

		return data.network;
	} catch (err) {
		throw new Error('Failed to fetch network stations');
	}
};
