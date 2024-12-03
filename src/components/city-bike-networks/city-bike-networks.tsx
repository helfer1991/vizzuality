'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import { useContext, useCallback } from 'react';
import { CityBikeNetworkCard } from '@/components/ui/city-bike-network-card/city-bike-network-card';
import { PaginationControls } from '../pagination/pagination';
import { NETWORKS_PER_PAGE } from './constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useScrollToTop } from '@/hooks/scroll-to-top';

export function CityBikeNetworks() {
	const { cityBikeNetworks } = useContext(CityBikeNetworkContext);
	const router = useRouter();
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get('page')) || 1;
	const startIndex = (currentPage - 1) * NETWORKS_PER_PAGE;
	const endIndex = startIndex + NETWORKS_PER_PAGE;
	useScrollToTop(currentPage);

	const handlePageChange = useCallback(
		(newPage: number) => {
			const params = new URLSearchParams(searchParams);
			params.set('page', newPage.toString());
			router.push(`?${params.toString()}`);
		},
		[searchParams, router]
	);

	return (
		<section>
			<ul>
				{cityBikeNetworks.slice(startIndex, endIndex).map((cityBikeNetwork) => (
					<li key={cityBikeNetwork.id}>
						<CityBikeNetworkCard cityBikeNetwork={cityBikeNetwork} />
					</li>
				))}
			</ul>
			<PaginationControls
				currentPage={currentPage}
				totalItems={cityBikeNetworks.length}
				itemsPerPage={NETWORKS_PER_PAGE}
				onPageChange={handlePageChange}
			/>
		</section>
	);
}
