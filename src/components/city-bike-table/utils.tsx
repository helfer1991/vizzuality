import { Station } from '@/types';
import { ColumnDef, HeaderContext } from '@tanstack/react-table';
import { ArrowDown01, ArrowDown10, ArrowUpDown } from 'lucide-react';

type SortableHeaderProps = {
	column: HeaderContext<Station, unknown>['column'];
	label: string;
};

const SortableHeader = ({ column, label }: SortableHeaderProps) => {
	const sortIcons = {
		asc: (
			<ArrowDown01
				className='h-3 w-3'
				strokeWidth={2}
			/>
		),
		desc: (
			<ArrowDown10
				className='h-3 w-3'
				strokeWidth={2}
			/>
		),
		default: (
			<ArrowUpDown
				className='h-3 w-3'
				strokeWidth={2}
			/>
		),
	};

	return (
		<button
			onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			className='flex items-center gap-2 rounded bg-inherit px-2 py-3 transition-colors hover:bg-toreabay-700'
		>
			<span className='uppercase'>{label}</span>
			{sortIcons[column.getIsSorted() as keyof typeof sortIcons] ??
				sortIcons.default}
		</button>
	);
};

export const columns: ColumnDef<Station, unknown>[] = [
	{
		accessorKey: 'name',
		header: () => <span className='px-2 py-3 uppercase'>station name</span>,
	},
	{
		accessorKey: 'free_bikes',
		header: (context) => (
			<SortableHeader
				column={context.column}
				label='free bikes'
			/>
		),
		cell: (info) => (
			<span className='font-bold'>{info.getValue() as number}</span>
		),
	},
	{
		accessorKey: 'empty_slots',
		header: (context) => (
			<SortableHeader
				column={context.column}
				label='empty slots'
			/>
		),
		cell: (info) => (
			<span className='font-bold'>{info.getValue() as number}</span>
		),
	},
];

export const removeNumberingFromStation = (
	stations: Array<Station>
): Array<Station> => {
	return stations.map((station: Station) => {
		const nameParts = station.name.split(' - ');
		return {
			...station,
			name: nameParts[1]?.trim() || station.name,
		};
	});
};
