import * as React from 'react';
import { Search } from 'lucide-react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ ...props }, ref) => {
		return (
			<div className='flex h-12 items-center rounded-full border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2'>
				<Search className='h-6 w-6 text-toreabay-800 stroke-[1.5px]' />
				<input
					{...props}
					ref={ref}
					type='search'
					className='w-full rounded-full p-2 placeholder:text-toreabay-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
				/>
			</div>
		);
	}
);

Input.displayName = 'Input';

export { Input };
