import TableSkeleton from './table-skeleton';

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

				<TableSkeleton />
			</aside>

			<div className='bg-gray-200 animate-pulse' />
		</main>
	);
}
