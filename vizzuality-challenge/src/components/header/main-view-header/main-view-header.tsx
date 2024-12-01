import { CycleMapLogo } from './cycle-map-logo';

export function MainViewHeader() {
	return (
		<header>
			<div
				aria-label='CycleMap Logo'
				className='flex gap-0.5'
			>
				<CycleMapLogo />
				<span className='font-semibold text-xl text-grenadier-400'>
					CycleMap
				</span>
			</div>
			<h1 className='font-semibold text-3xl text-toreabay-800 pt-6 pb-4'>
				Discover bike networks
			</h1>
			<p className='text-muted-foreground text-sm'>
				Lorem ipsum dolor sit amet consectetur. A volutpat adipiscing placerat
				turpis magna sem tempor amet faucibus. Arcu praesent viverra
				pellentesque nisi quam in rhoncus.
			</p>
		</header>
	);
}
