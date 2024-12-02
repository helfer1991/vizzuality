export default function DetailViewSkeleton() {
	return (
		<main className='grid grid-cols-[minmax(400px,551px)_1fr] h-screen'>
			<aside className='flex flex-col bg-indigo-900 text-white'>
				<header className='p-6 space-y-4'>
					<div className='h-4 w-16 bg-white/20 rounded animate-pulse' />
					<div className='h-8 w-72 bg-white/20 rounded animate-pulse' />
					<div className='space-y-2'>
						<div className='h-4 w-48 bg-white/20 rounded animate-pulse' />
						<div className='h-4 w-32 bg-white/20 rounded animate-pulse' />
					</div>
				</header>

				<div className='p-4'>
					<div className='flex gap-4 border-b border-white/20 pb-2'>
						<div className='h-4 w-1/2 bg-white/20 rounded animate-pulse' />
						<div className='h-4 w-1/4 bg-white/20 rounded animate-pulse' />
						<div className='h-4 w-1/4 bg-white/20 rounded animate-pulse' />
					</div>

					{[...Array(8)].map((_, i) => (
						<div
							key={i}
							className='flex gap-4 py-4 border-b border-white/10'
						>
							<div className='h-4 w-1/2 bg-white/20 rounded animate-pulse' />
							<div className='h-4 w-1/4 bg-white/20 rounded animate-pulse' />
							<div className='h-4 w-1/4 bg-white/20 rounded animate-pulse' />
						</div>
					))}

					<div className='flex justify-center gap-2 mt-6'>
						<div className='h-8 w-20 bg-white/20 rounded animate-pulse' />
						<div className='h-8 w-8 bg-white/20 rounded animate-pulse' />
						<div className='h-8 w-20 bg-white/20 rounded animate-pulse' />
					</div>
				</div>
			</aside>

			<div className='bg-gray-200 animate-pulse' />
		</main>
	);
}
