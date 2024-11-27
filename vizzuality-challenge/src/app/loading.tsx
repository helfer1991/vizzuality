export default function Loading() {
	return (
		<div className='flex h-screen'>
			<div className='w-1/3 p-6 overflow-auto'>
				<div className='flex items-center gap-2 mb-8'>
					<div className='w-6 h-6 rounded bg-gray-200 animate-pulse' />
					<div className='h-6 w-24 bg-gray-200 rounded animate-pulse' />
				</div>

				<div className='space-y-4 mb-8'>
					<div className='h-8 bg-gray-200 rounded w-3/4 animate-pulse' />
					<div className='space-y-2'>
						<div className='h-4 bg-gray-200 rounded w-full animate-pulse' />
						<div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse' />
					</div>
				</div>

				<div className='flex gap-3 mb-8'>
					<div className='flex-1 h-10 bg-gray-200 rounded animate-pulse' />
					<div className='w-24 h-10 bg-gray-200 rounded animate-pulse' />
				</div>

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
			</div>

			<div className='flex-1 bg-gray-200 animate-pulse'></div>
		</div>
	);
}
