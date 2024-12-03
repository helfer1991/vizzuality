import { CITYBIKES_API_URL } from './constants';
import type { CityBikeNetworkStations } from '@/types';

export const getCityBikeNetworkStations = async (
	id: string
): Promise<CityBikeNetworkStations> => {
	if (!id) {
		throw new Error('Network ID is required');
	}

	try {
		const response = await fetch(`${CITYBIKES_API_URL}/${id}`);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch network stations: ${response.status} ${response.statusText}`
			);
		}

		const data = (await response.json()) as {
			network: CityBikeNetworkStations;
		};

		return data.network;
	} catch {
		throw new Error('Failed to fetch network stations');
	}
};
