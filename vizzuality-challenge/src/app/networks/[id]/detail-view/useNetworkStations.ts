import { useQuery } from '@tanstack/react-query';
import { getCityBikeNetworkStations } from '@/lib/getCityBikeNetworkStations';

const REFETCH_INTERVAL = 5 * 60 * 1000;

export const useNetworkStations = (networkId: string) => {
	return useQuery({
		queryKey: ['network', networkId],
		queryFn: () => getCityBikeNetworkStations(networkId),
		refetchInterval: REFETCH_INTERVAL,
		refetchIntervalInBackground: true,
	});
};
