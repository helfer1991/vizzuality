import Image from 'next/image';
import Map from './mapbox';
import { MainView } from './MainView';

export default async function Home() {
	const response = await fetch('https://api.citybik.es/v2/networks');
	const data = await response.json();
	//console.log(data);

	return <MainView />;
}
