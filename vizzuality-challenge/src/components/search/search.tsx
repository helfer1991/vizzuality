import { InputSearch } from '@/ui/input-search';
import { FormEvent, useState } from 'react';

export function Search() {
	return (
		<form className='grid grid-cols-[auto_114px] gap-2'>
			<InputSearch
				type='search'
				placeholder='Search network'
			/>
		</form>
	);
}
