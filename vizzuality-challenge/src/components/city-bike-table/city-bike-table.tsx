'use client';
import { useCallback } from 'react';
import { STATIONS_PER_PAGE } from './constants';
import type { Station } from '@/types';
import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { columns } from './utils';
import { PaginationControls } from '../pagination/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useScrollToTop } from '@/hooks/scroll-to-top';

type CityBikeTableProps = {
	stations: Array<Station>;
};

export default function CityBikeTable({ stations }: CityBikeTableProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;
	useScrollToTop(currentPage);

	const cityBikeTable = useReactTable({
		data: stations,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			pagination: {
				pageIndex: currentPage - 1,
				pageSize: STATIONS_PER_PAGE,
			},
		},
		getPaginationRowModel: getPaginationRowModel(),
	});

	const handlePageChange = useCallback(
		(newPage: number) => {
			const params = new URLSearchParams(searchParams);
			params.set('page', newPage.toString());
			router.push(`?${params.toString()}`);
		},
		[searchParams, router]
	);

	return (
		<div className='p-2'>
			<table className='w-full'>
				<thead>
					{cityBikeTable.getHeaderGroups().map((headerGroup) => (
						<tr
							key={headerGroup.id}
							className='flex gap-2 border-b border-white'
						>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className='flex items-center gap-2 first:flex-1 [&:not(:first-child)]:w-1/4 [&:not(:first-child)]:justify-center font-medium text-sm'
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{cityBikeTable.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className='flex py-4 px-2 border-b border-dashed border-white border-opacity-50 last:mb-6'
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className='flex items-center gap-2 first:flex-1 [&:not(:first-child)]:w-1/4 [&:not(:first-child)]:justify-center font-normal text-base'
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<PaginationControls
				currentPage={currentPage}
				totalItems={stations.length}
				itemsPerPage={STATIONS_PER_PAGE}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
