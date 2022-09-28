export type ApiResult = {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	},
	results: {
		id: number,
		name: string;
		image: string;
		// @todo: More to be typed
	}[]
}