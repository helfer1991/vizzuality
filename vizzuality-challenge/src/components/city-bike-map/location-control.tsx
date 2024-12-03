export class LocationControl implements mapboxgl.IControl {
	private map: mapboxgl.Map;
	private container: HTMLDivElement;

	constructor(map: mapboxgl.Map) {
		this.map = map;
		this.container = document.createElement('div');

		const styleSheet = document.createElement('style');
		styleSheet.textContent = `
      .location-control.mapboxgl-ctrl-group {
        background: #363698 !important;
        border-radius: 999px !important;
        border: none !important;
        box-shadow: none !important;
        height: 40px !important;
        padding: 0 !important;
          margin: 32px 0 0 24px !important;
        width: 113px !important;
      }

      .location-control .location-button {
        color: white !important;
        background: #363698 !important;
        border: none !important;
        display: flex !important;
        align-items: center !important;
        font-weight: 700 !important;
        height: 40px !important;
        gap: 0.5rem !important;
        padding: 0.5rem 1rem !important;
        width: 113px !important;
      }

      .location-control .location-button span {
        display: inline-block !important;
      }
    `;
		document.head.appendChild(styleSheet);

		this.container.className =
			'mapboxgl-ctrl mapboxgl-ctrl-group location-control';

		const button = document.createElement('button');
		button.className = 'location-button flex items-center gap-2 px-4 py-2';
		button.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 12L12 12.01M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" stroke-linecap="round"/>
      </svg>
      <span>Near me</span>
    `;

		button.addEventListener('click', this.handleClick.bind(this));
		this.container.appendChild(button);
	}

	private handleClick() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.map.flyTo({
						center: [position.coords.longitude, position.coords.latitude],
						zoom: 14,
					});
				},
				(error) => console.error('Error getting location:', error)
			);
		}
	}

	onAdd() {
		return this.container;
	}

	onRemove() {
		this.container.parentNode?.removeChild(this.container);
	}
}
