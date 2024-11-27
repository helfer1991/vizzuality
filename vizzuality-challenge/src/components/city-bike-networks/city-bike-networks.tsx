'use client';
import { CityBikeNetworkContext } from '@/context/CityBikeNetworkContext';
import { Suspense, useContext, useEffect } from 'react';
import { CityBikeNetworkCard } from '@/ui/city-bike-network-card/city-bike-network-card';

interface Props {
	onPaginationChange: () => void;
}

export function CityBikeNetworks() {
	const { cityBikeNetworks } = useContext(CityBikeNetworkContext);

	return (
		<>
			<ul>
				{cityBikeNetworks.map((cityBikeNetwork) => (
					<li key={cityBikeNetwork.id}>
						<CityBikeNetworkCard cityBikeNetwork={cityBikeNetwork} />
					</li>
				))}
			</ul>
		</>
	);
}
