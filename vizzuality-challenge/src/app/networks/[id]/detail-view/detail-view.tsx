import { Suspense } from 'react';
import DetailViewContent from '@/components/layouts/detail-view/detail-view-content/detail-view-content';
import DetailViewSkeleton from './loading';

export type DetailViewProps = {
	cityBikeNetworkId: string;
};

export default function DetailView({ cityBikeNetworkId }: DetailViewProps) {
	return (
		<Suspense fallback={<DetailViewSkeleton />}>
			<DetailViewContent cityBikeNetworkId={cityBikeNetworkId} />
		</Suspense>
	);
}
