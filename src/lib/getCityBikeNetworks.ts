import type { CityBikeNetwork } from '@/types';
import cityBikeNetworkMock from '@/__mocks__/networksMock.json';
import { CITYBIKES_API_URL } from './constants';

export const getCityBikeNetworks = async (): Promise<
	Array<CityBikeNetwork>
> => {
	if (process.env.NEXT_PUBLIC_USE_MOCKS === 'true') {
		return cityBikeNetworkMock.networks;
	}

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
