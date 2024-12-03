import FlexSearch from 'flexsearch';
import type { CityBikeNetwork } from '@/types';

const indexCache = new WeakMap<Array<CityBikeNetwork>, FlexSearch.Index>();

const filterCityBikeNetworksBySearchQuery = (
	networks: Array<CityBikeNetwork>,
	query: string
): Array<CityBikeNetwork> => {
	if (!query) return networks;

	let index = indexCache.get(networks);
	if (!index) {
		index = new FlexSearch.Index({
			tokenize: 'forward',
			resolution: 9,
			cache: true,
		});

		networks.forEach((network, idx) => {
			const searchableText = `${network.name} ${
				Array.isArray(network.company)
					? network.company.join(' ')
					: network.company
			}`;
			index?.add(idx, searchableText);
		});

		indexCache.set(networks, index);
	}

	const resultIndices = index.search(query) as Array<number>;
	return resultIndices.map((idx) => networks[idx as number]);
};

export const getFilteredNetworks = (
	networks: Array<CityBikeNetwork>,
	searchQuery: string,
	countryFilter?: string | null
): Array<CityBikeNetwork> => {
	let filtered = filterCityBikeNetworksBySearchQuery(networks, searchQuery);

	if (countryFilter) {
		filtered = filtered.filter(
			(network) => network.location.country === countryFilter
		);
	}

	return filtered;
};
