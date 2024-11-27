'use client';
import { CityBikeNetwork } from '@/types';
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';

type CityBikeNetworkContext = {
	cityBikeNetworksInitialValue: Array<CityBikeNetwork>;
	cityBikeNetworks: Array<CityBikeNetwork>;
	setCityBikeNetworks: Dispatch<SetStateAction<Array<CityBikeNetwork>>>;
};

export const CityBikeNetworkContext = createContext<CityBikeNetworkContext>(
	{} as CityBikeNetworkContext
);

type CityBikeNetworkProviderProps = {
	cityBikeNetworksInitialValue: Array<CityBikeNetwork>;
	children: ReactNode;
};

export const CityBikeNetworkProvider: React.FC<
	CityBikeNetworkProviderProps
> = ({ cityBikeNetworksInitialValue, children }) => {
	const [cityBikeNetworks, setCityBikeNetworks] = useState<
		Array<CityBikeNetwork>
	>(cityBikeNetworksInitialValue);

	return (
		<CityBikeNetworkContext.Provider
			value={{
				cityBikeNetworksInitialValue,
				cityBikeNetworks,
				setCityBikeNetworks,
			}}
		>
			{children}
		</CityBikeNetworkContext.Provider>
	);
};
