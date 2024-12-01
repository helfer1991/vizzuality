'use client';
import { DetailViewHeader } from '@/components/header/detail-view-header/detail-view-header';
import { StationsMap } from '@/components/city-bikes-map/mapbox';
import { useNetworkStations } from './useNetworkStations';

type DetailViewProps = {
	cityBikeNetworkId: string;
};

export default function DetailView({ cityBikeNetworkId }: DetailViewProps) {
	const { data, isError } = useNetworkStations(cityBikeNetworkId);

	if (isError || !data) {
		return <div></div>;
	}

	return (
		<main className='grid grid-cols-[551px_auto] w-screen h-screen'>
			<aside className='relative flex flex-col gap-4 h-full bg-toreabay-800 text-white overflow-y-scroll scroll-smooth'>
				<DetailViewHeader
					name={data.name}
					company={data.company}
					location={data.location}
				/>
			</aside>
			<StationsMap stations={data.stations} />
		</main>
	);
}
