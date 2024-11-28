'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import { filterCityBikeNetworksBySearchQuery } from './utils';
import countries from '@/lib/countries/countriesLabel.json';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { Search } from './search';

export function CityBikesNetworksSearch() {
	const { cityBikeNetworksInitialValue, setCityBikeNetworks, setCurrentPage } =
		useContext(CityBikeNetworkContext);
	const router = useRouter();
	const params = useSearchParams();

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const query = decodeURIComponent(searchParams.get('search') || '');
		const countryFilter = searchParams.get('country');
		let result = filterCityBikeNetworksBySearchQuery(
			cityBikeNetworksInitialValue,
			query
		);

		if (countryFilter) {
			result = result.filter(
				(network: any) => network.location.country === countryFilter
			);
		}

		setCityBikeNetworks(result);
	}, [params, cityBikeNetworksInitialValue, setCityBikeNetworks]);

	const handleOnSearch = (query: string, countryFilter?: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (query) {
			searchParams.set('search', encodeURIComponent(query));
		} else {
			searchParams.delete('search');
		}

		if (countryFilter) {
			searchParams.set('country', countryFilter);
		} else {
			searchParams.delete('country');
		}

		const url = searchParams.toString()
			? `${window.location.pathname}?${searchParams.toString()}`
			: window.location.pathname;

		router.push(url);
		setCurrentPage(0);
	};

	return (
		<Search
			onSearch={handleOnSearch}
			comboBoxItems={countries.data}
			defaultQuery={decodeURIComponent(params.get('search') || '') || undefined}
			defaultFilterValue={params.get('country') ?? undefined}
		/>
	);
}
