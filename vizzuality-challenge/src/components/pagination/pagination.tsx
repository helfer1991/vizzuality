'use client';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationEllipsis,
} from '@/components/ui/pagination';

type PaginationControlsProps = {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
};

const getVisiblePages = (currentPage: number, totalPages: number) => {
	const pages: number[] = [];

	if (currentPage === 1) {
		pages.push(1, 2, 3);
	} else {
		pages.push(currentPage - 1, currentPage, currentPage + 1);
	}

	return pages.filter((page) => page <= totalPages);
};

export function PaginationControls({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}: PaginationControlsProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	if (totalPages <= 1) {
		return null;
	}

	const visiblePages = getVisiblePages(currentPage, totalPages);
	const showEllipsis = totalPages > Math.max(...visiblePages);

	return (
		<Pagination className='my-4'>
			<PaginationContent>
				{currentPage > 1 && (
					<PaginationItem>
						<PaginationPrevious
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onPageChange(currentPage - 1);
							}}
							className='hover:bg-toreabay-50'
						/>
					</PaginationItem>
				)}

				{/* Page numbers */}
				{visiblePages.map((page) => (
					<PaginationItem key={page}>
						<PaginationLink
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onPageChange(page);
							}}
							className={
								currentPage === page
									? 'border border-toreabat-200 bg-toreabay-100 hover:bg-toreabay-50'
									: 'hover:bg-toreabay-50'
							}
						>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}

				{showEllipsis && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				{currentPage < totalPages && (
					<PaginationItem>
						<PaginationNext
							href='#'
							onClick={(e) => {
								e.preventDefault();
								onPageChange(currentPage + 1);
							}}
							className='hover:bg-toreabay-50'
						/>
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
}
