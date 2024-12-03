import type { CityBikeNetwork } from '@/types';
import { CITYBIKES_API_URL } from './constants';

export const getCityBikeNetworks = async (): Promise<
	Array<CityBikeNetwork>
> => {
	try {
		const response = await fetch(CITYBIKES_API_URL);

		if (!response.ok) {
			throw new Error('Fetching of city bike networks failed');
		}

		const { networks } = (await response.json()) as {
			networks: Array<CityBikeNetwork>;
		};

		return networks;
	} catch {
		throw new Error('Fetching of city bike networks failed');
	}
};
