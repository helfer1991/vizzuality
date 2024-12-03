type CityBikeStationsCountProps = {
	count: number;
};

export default function CityBikeTableStationsCount({
	count,
}: CityBikeStationsCountProps) {
	const CountBadge = () => (
		<span className='border border-grenadier-400 text-grenadier-400 text-sm rounded-[2px] px-1.5 py-1 mx-2'>
			{count}
		</span>
	);

	return (
		<p className='text-sm mb-3 ml-2'>
			{count === 1 ? '' : 'All'}
			<CountBadge />
			station{count !== 1 && 's'}
		</p>
	);
}
