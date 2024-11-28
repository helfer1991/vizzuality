import { MainViewHeader } from '@/components/header/main-view-header/main-view-header';
import { CityBikeNetworks } from '@/components/city-bike-networks/city-bike-networks';
import { CityBikesNetworksSearch } from '@/components/search/city-bikes-networks-search';
import { Suspense } from 'react';
import CityBikesNetworksLoadingState from '@/loading-states/city-bikes-networks-loading-state/city-bikes-networks-loading-state';
import SearchLoadingState from '@/loading-states/search-loading-state/search-loading-state';

export function MainView() {
	return (
		<main className='grid grid-cols-[551px_auto] w-screen h-screen'>
			<aside className='relative flex flex-col gap-4 h-full overflow-y-scroll p-10'>
				<MainViewHeader />
				<Suspense fallback={<SearchLoadingState />}>
					<CityBikesNetworksSearch />
				</Suspense>
				<Suspense fallback={<CityBikesNetworksLoadingState />}>
					<CityBikeNetworks />
				</Suspense>
			</aside>
		</main>
	);
}
