type Item = {
	value: string;
	label: string;
};

export const truncateText = (text: string, maxLength: number): string => {
	return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const filterItems = (
	value: string,
	search: string,
	items: Array<Item>
): number => {
	const searchLower = search.toLowerCase();
	const label = items.find((item) => item.value === value)?.label;

	return value.toLowerCase().includes(searchLower) ||
		label?.toLowerCase().includes(searchLower)
		? 1
		: 0;
};
