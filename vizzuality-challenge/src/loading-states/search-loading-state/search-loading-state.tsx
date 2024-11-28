export default function SearchLoadingState() {
	return (
		<div className='flex gap-3 mb-8'>
			<div className='flex-1 h-10 bg-gray-200 rounded animate-pulse' />
			<div className='w-24 h-10 bg-gray-200 rounded animate-pulse' />
		</div>
	);
}
