import countriesData from '@/lib/countries/countries.json';

type CountriesMap = {
	[key: string]: string;
};

type CompanyVisibilityConfig = {
	maxCharsPerLine: number;
	visibleCompaniesLimit: number;
};

const countries = countriesData as CountriesMap;

export const getNormalizedCountryName = (code: string) => {
	const normalizedCode = code.trim().toUpperCase();

	const name = countries[normalizedCode];

	if (!name) {
		console.warn(
			`Country code "${normalizedCode}" not found in countries dictionary. ` +
				'Please verify the code is correct or add it to the dictionary.'
		);
		return normalizedCode;
	}

	return name;
};

export const getCompaniesCount = (
	companies: Array<string>,
	config: CompanyVisibilityConfig = {
		maxCharsPerLine: 26,
		visibleCompaniesLimit: 2,
	}
): number | null => {
	const { maxCharsPerLine, visibleCompaniesLimit } = config;

	if (companies.length <= 1) {
		return null;
	}

	if (companies[0].length > maxCharsPerLine) {
		return companies.length - 1;
	}

	return companies.length > visibleCompaniesLimit
		? companies.length - visibleCompaniesLimit
		: null;
};
