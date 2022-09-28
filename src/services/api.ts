import { ApiResult } from '../types';

export async function getUsers(): Promise<string[]> {
	// @todo: use https://rickandmortyapi.com/documentation#character
	const response = await fetch('https://rickandmortyapi.com/api/character');
	const data: ApiResult = await response.json();
	return data.results.map((character) => character.name);
}
