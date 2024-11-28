import { FormEvent, useState } from 'react';
import { Input } from '@/ui/input';
import CountriesCombobox from '../countries-combobox/countries-combobox';
import type { CountryComboboxItem } from '@/types';

type SearchProps = {
	comboBoxItems: Array<CountryComboboxItem>;
	defaultQuery?: string;
	defaultFilterValue?: string;
	onSearch: (query: string, filterCode?: string) => void;
};

export function Search({
	comboBoxItems,
	defaultQuery,
	defaultFilterValue,
	onSearch,
}: SearchProps) {
	const [searchQuery, setSearchQuery] = useState<string>(defaultQuery || '');
	const [filterValue, setFilterValue] = useState<string>(
		defaultFilterValue || ''
	);

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		onSearch(searchQuery, filterValue);
	};

	const handleFilterSelect = (filter: string): void => {
		setFilterValue(filter);
		onSearch(searchQuery, filter);
	};

	return (
		<form
			className='grid grid-cols-[auto_114px] gap-2'
			onSubmit={handleSubmit}
		>
			<Input
				type='search'
				placeholder='Search network'
				onChange={(e) => setSearchQuery(e.target.value)}
				value={searchQuery}
			/>
			<CountriesCombobox
				items={comboBoxItems}
				onSelect={handleFilterSelect}
				defaultValue={filterValue ?? undefined}
			/>
		</form>
	);
}
