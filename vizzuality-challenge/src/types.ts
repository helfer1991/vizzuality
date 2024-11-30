export type CityBikeNetwork = {
	company: Array<string>;
	ebikes?: boolean;
	gbfs_href?: string;
	href: string;
	id: string;
	license?: License;
	location: Location;
	name: string;
	source?: string;
};

export type Location = {
	city: string;
	country: string;
	latitude: number;
	longitude: number;
};

export type License = {
	name: string;
	url: string;
};

export type CountryComboboxItem = {
	label: string;
	value: string;
};

export type Station = {
	empty_slots: number;
	extra: Extra;
	free_bikes: number;
	id: string;
	latitude: number;
	longitude: number;
	name: string;
	timestamp: string;
};

export type Extra = {
	number: number;
	reviews: number;
	score: number;
	status: string;
	uid: string;
};
