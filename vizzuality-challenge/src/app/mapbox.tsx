'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN as string;

export default function Map() {
	const mapContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [-74.5, 40],
			zoom: 9,
		});

		return () => map.remove();
	}, []);

	return (
		<div
			ref={mapContainer}
			style={{ width: '100%', height: '500px' }}
		/>
	);
}
