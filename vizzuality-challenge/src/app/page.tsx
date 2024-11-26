import Image from 'next/image';
import Map from './mapbox';

export default async function Home() {
	const response = await fetch('https://api.citybik.es/v2/networks');
	const data = await response.json();
	//console.log(data);

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center w-full'>
				{' '}
				{/* Added w-full */}
				<Map />
			</main>
			{/* Rest of your footer */}
		</div>
	);
}
