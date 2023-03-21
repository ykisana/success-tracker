export enum Tab {
	TYPESELECTOR,
	DETAILS,
	DONE
}

export function handleTabChange(tab: Tab) {
	switch (tab) {
		case Tab.TYPESELECTOR:
			return Tab.DETAILS;
		case Tab.DETAILS:
			return Tab.DONE;
		default:
			return Tab.TYPESELECTOR;
	}
}
