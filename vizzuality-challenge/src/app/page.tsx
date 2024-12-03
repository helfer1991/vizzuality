import { getCityBikeNetworks } from '@/lib/getCityBikeNetworks';
import { CityBikeNetworkProvider } from '@/context/CityBikeNetworkContext';
import { MainView } from '@/components/layouts/main-view/main-view';

export default async function Home() {
	const cityBikeNetworks = await getCityBikeNetworks();

	return (
		<CityBikeNetworkProvider cityBikeNetworksInitialValue={cityBikeNetworks}>
			<MainView />
		</CityBikeNetworkProvider>
	);
}
