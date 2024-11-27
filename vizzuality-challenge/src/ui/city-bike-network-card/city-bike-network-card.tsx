import { getAdditionalCompaniesCount, getCountryName } from '@/ui/utils';
import { Location } from '@/types';
import Link from 'next/link';
import CompanyInfo from './company-info/company-info';
import LocationInfo from './location-info/location-info';
import DetailsButton from './details-button/details-button';
import type { CityBikeNetwork } from '@/types';

type CityBikeNetworkCardProps = {
	cityBikeNetwork: CityBikeNetwork;
};

export function CityBikeNetworkCard({
	cityBikeNetwork,
}: CityBikeNetworkCardProps) {
	const { id, company, location, name } = cityBikeNetwork;
	const additionalCompaniesCount = getAdditionalCompaniesCount(company);
	const countryName = getCountryName(location.country);

	return (
		<Link
			href={`/networks/${id}`}
			className='block px-4 py-2 rounded-[2px] border-b border-toreabay-100 hover:bg-toreabay-100 transition-colors group relative'
			aria-label={`View details for ${name} in ${location.city}, ${countryName}`}
		>
			<article>
				<h2 className='font-bold text-xl leading-7 text-toreabay-800 mb-1'>
					{name}
				</h2>

				<LocationInfo location={location} />
				<CompanyInfo
					companies={company}
					additionalCount={additionalCompaniesCount || 0}
				/>

				<DetailsButton />
			</article>
		</Link>
	);
}
