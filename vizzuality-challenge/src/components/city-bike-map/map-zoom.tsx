import mapboxgl from 'mapbox-gl';
import { Station } from '../../types';

class CustomZoomControl implements mapboxgl.IControl {
	private map: mapboxgl.Map;
	private container: HTMLDivElement;

	constructor(map: mapboxgl.Map) {
		this.map = map;
		this.container = document.createElement('div');

		// Important: Add mapboxgl-ctrl-group class to work with Mapbox's control system
		this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

		// Add custom styles to override Mapbox defaults
		const styleSheet = document.createElement('style');
		styleSheet.textContent = `
      .mapboxgl-ctrl-group {
        background: #fff !important;
        border-radius: 12px !important;
        box-shadow: 0 0 0 2px rgba(0,0,0,.1) !important;
        border: none !important;
      }

      .mapboxgl-ctrl-group > button {
        width: 32px !important;
        height: 32px !important;
        display: block !important;
        padding: 0 !important;
        outline: none !important;
        border: 0 !important;
        box-sizing: border-box !important;
        background-color: transparent !important;
        cursor: pointer !important;
        text-align: center !important;
        -webkit-font-smoothing: antialiased !important;
        transition: background-color 0.2s ease !important;
      }

      .mapboxgl-ctrl-group > button > span {
        display: none !important;
      }

      .mapboxgl-ctrl-zoom-in:hover {
        background-color: #E2EAFD !important;
        border-radius: 12px 12px 0 0 !important;
      }

      .mapboxgl-ctrl-zoom-out:hover {
        background-color: #E2EAFD !important;
        border-radius: 0 0 12px 12px !important;
      }


      /* Hide default icon content */
      .mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon,
      .mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon {
        background-image: none !important;
      }

      /* Add custom content */
      .mapboxgl-ctrl-zoom-in::after {
        content: '+' !important;
        font-size: 18px !important;
        color: #666 !important;
      }

      .mapboxgl-ctrl-zoom-out::after {
        content: '−' !important;
        font-size: 18px !important;
        color: #666 !important;
      }
    `;
		document.head.appendChild(styleSheet);

		const zoomInButton = document.createElement('button');
		zoomInButton.className = 'mapboxgl-ctrl-zoom-in';
		zoomInButton.type = 'button';
		zoomInButton.setAttribute('aria-label', 'Zoom In');
		zoomInButton.addEventListener('click', () => this.map.zoomIn());

		const zoomOutButton = document.createElement('button');
		zoomOutButton.className = 'mapboxgl-ctrl-zoom-out';
		zoomOutButton.type = 'button';
		zoomOutButton.setAttribute('aria-label', 'Zoom Out');
		zoomOutButton.addEventListener('click', () => this.map.zoomOut());

		this.container.appendChild(zoomInButton);
		this.container.appendChild(zoomOutButton);
	}

	onAdd() {
		return this.container;
	}

	onRemove() {
		this.container.parentNode?.removeChild(this.container);
	}
}

function getCenterCoordinates(stations: Station[]): [number, number] {
	const latitudes = stations.map((station) => station.latitude);
	const longitudes = stations.map((station) => station.longitude);

	const minLat = Math.min(...latitudes);
	const maxLat = Math.max(...latitudes);
	const minLng = Math.min(...longitudes);
	const maxLng = Math.max(...longitudes);

	const centerLat = (minLat + maxLat) / 2;
	const centerLng = (minLng + maxLng) / 2;

	return [centerLng, centerLat];
}

export { CustomZoomControl, getCenterCoordinates };
