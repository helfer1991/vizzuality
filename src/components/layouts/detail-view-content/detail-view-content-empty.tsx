import { Bike } from 'lucide-react';

export default function DetailViewContentEmpty() {
	return (
		<main className='grid grid-cols-[minmax(400px,551px)_1fr] h-screen'>
			<aside className='flex flex-col items-center justify-center h-full bg-indigo-900 text-white p-6 text-center'>
				<div className='space-y-4'>
					<Bike className='w-16 h-16 text-white/60 mx-auto' />
					<h2 className='text-xl font-medium'>No stations available</h2>
					<p className='text-white/80'>
						There are currently no bike stations in this network.
					</p>
				</div>
			</aside>
			<div className='bg-gray-100' />
		</main>
	);
}
