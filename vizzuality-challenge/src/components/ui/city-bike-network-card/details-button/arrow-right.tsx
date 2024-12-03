type ArrowRightProps = {
	animationDuration?: number;
};

export default function ArrowRight({
	animationDuration = 500,
}: ArrowRightProps) {
	return (
		<svg
			aria-hidden='true'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={'relative transition-transform group-hover:-translate-x-1'}
			style={{ transitionDuration: `${animationDuration}ms` }}
		>
			<path
				d='M4.16659 10L15.8333 10M15.8333 10L9.99992 4.16668M15.8333 10L9.99992 15.8333'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
