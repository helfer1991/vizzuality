'use client';

import { useState } from 'react';
import { Check, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import type { CountryComboboxItem } from '../../types';
import { truncateText, filterItems } from './utils';

type CountriesComboboxProps = {
	defaultValue?: string;
	items: Array<CountryComboboxItem>;
	onSelect: (value: string) => void;
};

export default function CountriesCombobox({
	defaultValue,
	items,
	onSelect,
}: CountriesComboboxProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>(defaultValue || '');

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-full rounded-full text-secondary-foreground h-12 py-2 px-4 overflow-hidden'
				>
					<MapPin className='h-4 w-4 shrink-0' />
					{value
						? truncateText(
								items.find((item) => item.value === value)?.label || '',
								7
						  )
						: 'Country'}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command filter={(value, search) => filterItems(value, search, items)}>
					<CommandInput placeholder='Look for a country' />
					<CommandEmpty>No country was found</CommandEmpty>
					<CommandGroup>
						<CommandList>
							{items.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue) => {
										const nextValue =
											currentValue === value ? '' : currentValue;
										setValue(nextValue);
										onSelect(nextValue);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === item.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{item.label}
								</CommandItem>
							))}
						</CommandList>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
