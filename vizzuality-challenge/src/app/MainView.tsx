import { useRef } from 'react';
import { MainViewHeader } from '@/components/header/main-view-header/main-view-header';
import { Search } from '@/components/search/search';

export function MainView() {
	return (
		<main className='grid grid-cols-[551px_auto] w-screen h-screen'>
			<aside className='relative flex flex-col gap-4 h-full overflow-y-scroll p-10'>
				<MainViewHeader />
				<Search />
			</aside>
		</main>
	);
}
