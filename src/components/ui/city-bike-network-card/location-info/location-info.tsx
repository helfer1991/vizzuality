import { MapPinIcon } from 'lucide-react';
import type { Location } from '@/types';

type LocationInfoProps = {
	location: Location;
};

export default function LocationInfo({ location }: LocationInfoProps) {
	const { city, country } = location;
	const locationText = `${city}, ${country}`;

	return (
		<div
			aria-label={`Location: ${locationText}`}
			className='flex items-center gap-2 mb-2'
		>
			<span className='flex justify-center items-center bg-toreabay-50 w-6 h-6 rounded-s'>
				<MapPinIcon className='w-4 h-4 text-grenadier-400' />
			</span>
			<span className='text-sm leading-7 text-muted-foreground'>
				{locationText}
			</span>
		</div>
	);
}
