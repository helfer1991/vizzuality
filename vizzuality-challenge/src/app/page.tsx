import { MainView } from './main-view';
import { getCityBikeNetworks } from '@/lib/getCityBikeNetworks';
import { CityBikeNetworkProvider } from '@/context/CityBikeNetworkContext';

export default async function Home() {
	const cityBikeNetworks = await getCityBikeNetworks();

	return (
		<CityBikeNetworkProvider cityBikeNetworksInitialValue={cityBikeNetworks}>
			<MainView />
		</CityBikeNetworkProvider>
	);
}
