import { Suspense } from 'react';
import DetailViewContent from './detail-view-content';
import { Loader2 } from 'lucide-react';

export type DetailViewProps = {
	cityBikeNetworkId: string;
};

export default function DetailView({ cityBikeNetworkId }: DetailViewProps) {
	return (
		<Suspense
			fallback={
				<div className='flex items-center justify-center h-screen'>
					<Loader2 className='h-8 w-8 animate-spin' />
				</div>
			}
		>
			<DetailViewContent cityBikeNetworkId={cityBikeNetworkId} />
		</Suspense>
	);
}
