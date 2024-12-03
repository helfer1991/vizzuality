import { useEffect } from 'react';

export const useScrollToTop = (currentPage: number) => {
	useEffect(() => {
		requestAnimationFrame(() => {
			const aside = document.querySelector('aside');
			aside?.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}, [currentPage]);
};
