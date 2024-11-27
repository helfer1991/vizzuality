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
