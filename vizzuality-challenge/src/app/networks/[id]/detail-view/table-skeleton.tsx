export default function TableSkeleton() {
	return (
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
	);
}
