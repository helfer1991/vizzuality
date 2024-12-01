import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { CityBikeNetworkStations } from '@/types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function removeNumberingFromStationNames(
	network: CityBikeNetworkStations
): CityBikeNetworkStations {
	return {
		...network,
		stations: network.stations.map((station) => {
			const arr = station.name.split('-');
			const name = arr.length === 1 ? arr[0] : arr[1].trim();

			return {
				...station,
				name,
			};
		}),
	};
}
