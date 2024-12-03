import { getNormalizedCountryName } from '@/utils';
import { Location } from '@/types';
import { ArrowLeft, BriefcaseBusiness, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import bicycles from '@/assets/bicycles.jpeg';

type DetailViewHeaderProps = {
	company: Array<string>;
	name: string;
	location: Location;
};

export function DetailViewHeader({
	name,
	location,
	company,
}: DetailViewHeaderProps) {
	return (
		<header
			className='relative py-8 px-10'
			role='banner'
		>
			<div
				className='absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-toreabay-800 to-transparent'
				aria-hidden='true'
			/>

			<Image
				alt='Image containing bycicles and cyclists'
				src={bicycles}
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: 'cover',
				}}
				priority
			/>

			<div className='relative flex flex-col items-start z-20'>
				<Link
					className='flex items-center justify-center bg-white w-10 h-10 rounded-full mb-10 hover:bg-gray-50 transition-colors'
					href='/'
					aria-label='Go back to home page'
				>
					<ArrowLeft
						className='text-grenadier-400'
						aria-hidden='true'
					/>
				</Link>

				<h1 className='font-bold text-3xl leading-8 mb-2'>{name}</h1>

				<div className='text-toreabay-100 text-base'>
					<p className='flex items-center gap-2 mb-2'>
						<MapPin
							className='w-4 h-4 shrink-0'
							aria-hidden='true'
						/>
						<span className='text-sm leading-7'>
							{location.city}, {getNormalizedCountryName(location.country)}
						</span>
					</p>
					<p className='flex items-center gap-2'>
						<BriefcaseBusiness
							strokeWidth={1}
							className='w-4 h-4 shrink-0'
							aria-hidden='true'
						/>
						<span className='leading-5'>{company.join(', ')}</span>
					</p>
				</div>
			</div>
		</header>
	);
}
