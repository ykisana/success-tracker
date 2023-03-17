export default function mixColors(percentage: number) {
	let colorA = percentage >= 50 ? '0ead69' : 'ffd23f'; // green or yellow
	let colorB = percentage >= 50 ? 'ffd23f' : 'ee4266'; //yellow or red

	const colorArbg = hexToRgb(colorA);
	const colorBrbg = hexToRgb(colorB);

	const r = Math.round(colorBrbg.r + (colorArbg.r - colorBrbg.r) * (percentage / 100));
	const g = Math.round(colorBrbg.g + (colorArbg.g - colorBrbg.g) * (percentage / 100));
	const b = Math.round(colorBrbg.b + (colorArbg.b - colorBrbg.b) * (percentage / 100));

	return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return { r, g, b };
}
