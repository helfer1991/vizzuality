'use client';
import { Suspense } from 'react';
import { DetailViewHeader } from '@/components/header/detail-view-header/detail-view-header';
import { StationsMap } from '@/components/city-bike-map/mapbox';
import { useNetworkStations } from './useNetworkStations';
import type { DetailViewProps } from './detail-view';
import CityBikeTable from '@/components/city-bike-table/city-bike-table';

export default function DetailViewContent({
	cityBikeNetworkId,
}: DetailViewProps) {
	const { data, isError } = useNetworkStations(cityBikeNetworkId);

	if (isError || !data) {
		return <div></div>;
	}

	return (
		<main className='grid grid-cols-[minmax(400px,551px)_1fr] w-screen h-screen'>
			<aside className='relative flex flex-col gap-4 h-full bg-toreabay-800 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-toreabay-700'>
				<DetailViewHeader
					name={data.name}
					company={data.company}
					location={data.location}
				/>
				<Suspense fallback={<div>Loading...</div>}>
					<CityBikeTable stations={data.stations} />
				</Suspense>
			</aside>
			<StationsMap stations={data.stations} />
		</main>
	);
}
