import { getCityBikeNetworkStations } from '@/lib/getCityBikeNetworkStations';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import DetailView from './detail-view/detail-view';

type DetailPageProps = {
	params: {
		id: string;
	};
};

export default async function DetailPage({ params }: DetailPageProps) {
	const { id } = params;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['city-bike-network', id],
		queryFn: () => getCityBikeNetworkStations(id),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<DetailView cityBikeNetworkId={id} />
		</HydrationBoundary>
	);
}
