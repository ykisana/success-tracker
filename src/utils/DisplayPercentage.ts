export default function displayPercentage(percentage: number) {
	return `${Math.round(percentage * 100) / 100}%`;
}
