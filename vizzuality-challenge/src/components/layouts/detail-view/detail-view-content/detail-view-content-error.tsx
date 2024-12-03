import { XCircle } from 'lucide-react';

export default function DetailViewContentError() {
	return (
		<main className='grid grid-cols-[minmax(400px,551px)_1fr] h-screen'>
			<aside className='flex flex-col items-center justify-center h-full bg-indigo-900 text-white p-6 text-center'>
				<div className='space-y-4'>
					<XCircle className='w-16 h-16 text-red-500 mx-auto' />
					<h2 className='text-xl font-medium'>Unable to load network data</h2>
					<p className='text-white/80'>
						There was an error loading the bike stations. Please try again
						later.
					</p>
					<button
						onClick={() => window.location.reload()}
						className='px-4 py-2 bg-indigo-800 rounded hover:bg-indigo-700 transition-colors'
					>
						Retry
					</button>
				</div>
			</aside>
			<div className='bg-gray-100' />
		</main>
	);
}
