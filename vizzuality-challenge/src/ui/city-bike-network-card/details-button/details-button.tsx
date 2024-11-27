import ArrowRight from './arrow-right';

const ANIMATION_DURATION = 250;

export default function DetailsButton() {
	return (
		<div
			className={
				'absolute h-10 bottom-2 right-2 text-grenadier-500 flex items-center gap-1 rounded-[43px] px-4 py-1 overflow-hidden'
			}
			role='presentation'
		>
			<div
				className='absolute inset-0 bg-white rounded-[43px] translate-x-full group-hover:translate-x-0 transition-transform'
				style={{ transitionDuration: `${ANIMATION_DURATION}ms` }}
			/>
			<div
				className='opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all relative'
				style={{ transitionDuration: `${ANIMATION_DURATION}ms` }}
			>
				Details
			</div>
			<ArrowRight animationDuration={ANIMATION_DURATION} />
		</div>
	);
}
