import { BriefcaseIcon } from 'lucide-react';

type CompanyInfoProps = {
	additionalCount: number;
	companies: Array<string>;
};

export default function CompanyInfo({
	additionalCount,
	companies,
}: CompanyInfoProps) {
	return (
		<p className='flex items-center gap-2'>
			<span className='flex justify-center items-center bg-toreabay-50 w-6 h-6 rounded-s'>
				<BriefcaseIcon className='w-4 h-4 text-grenadier-400' />
			</span>
			<span className='text-sm leading-7 text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis max-w-[236px]'>
				{companies.join(', ')}
			</span>
			{additionalCount > 0 && (
				<span className='border border-grenadier-400 text-grenadier-400 text-sm rounded-[2px] px-1.5 py-1'>
					+{additionalCount}
				</span>
			)}
		</p>
	);
}
