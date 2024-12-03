'use client';

import { AlertCircle } from 'lucide-react';

export default function NotFound() {
	return (
		<main className='grid grid-cols-[minmax(400px,551px)_1fr] h-screen'>
			<aside className='flex flex-col items-center justify-center h-full bg-indigo-900 text-white p-6 text-center'>
				<div className='space-y-4'>
					<AlertCircle className='w-16 h-16 text-white/60 mx-auto' />
					<h2 className='text-xl font-medium'>Network not found</h2>
					<p className='text-white/80'>
						The bike network you&apos;re looking for doesn&apos;t exist.
					</p>
					<button
						onClick={() => window.history.back()}
						className='px-4 py-2 bg-indigo-800 rounded hover:bg-indigo-700 transition-colors'
					>
						Go Back
					</button>
				</div>
			</aside>
			<div className='bg-gray-100' />
		</main>
	);
}
