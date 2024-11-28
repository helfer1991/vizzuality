export default function CityBikesNetworksLoadingState() {
	return (
		<div className='space-y-6'>
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className='space-y-3'
				>
					<div className='h-6 bg-gray-200 rounded w-1/2 animate-pulse' />

					<div className='space-y-2'>
						<div className='flex items-center gap-2'>
							<div className='w-4 h-4 rounded bg-gray-200 animate-pulse' />
							<div className='h-4 bg-gray-200 rounded w-2/3 animate-pulse' />
						</div>
						<div className='flex items-center gap-2'>
							<div className='w-4 h-4 rounded bg-gray-200 animate-pulse' />
							<div className='h-4 bg-gray-200 rounded w-1/2 animate-pulse' />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
