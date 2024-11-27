import ArrowRight from './arrow-right';

export default function DetailsButton() {
	return (
		<div className='absolute h-10 bottom-2 right-2 text-grenadier-500 flex items-center gap-1 rounded-[43px] px-4 py-1 overflow-hidden'>
			<div className='absolute inset-0 bg-white rounded-[43px] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out' />
			<div className='opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out relative'>
				Details
			</div>
			<ArrowRight />
		</div>
	);
}
