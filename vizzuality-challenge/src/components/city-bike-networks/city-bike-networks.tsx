'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import { Suspense, useContext, useEffect, useCallback } from 'react';
import { CityBikeNetworkCard } from '@/ui/city-bike-network-card/city-bike-network-card';
import { PaginationControls } from '../pagination/pagination';
import { ITEMS_PER_PAGE } from './constants';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
	onPaginationChange: () => void;
}

export function CityBikeNetworks() {
	const { cityBikeNetworks } = useContext(CityBikeNetworkContext);
	const router = useRouter();
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get('page')) || 1;
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	const handlePageChange = useCallback(
		(newPage: number) => {
			const params = new URLSearchParams(searchParams);
			params.set('page', newPage.toString());
			router.push(`?${params.toString()}`);
		},
		[searchParams, router]
	);

	return (
		<>
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
				itemsPerPage={ITEMS_PER_PAGE}
				onPageChange={handlePageChange}
			/>
		</>
	);
}
