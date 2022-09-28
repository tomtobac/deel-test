import { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import { getUsers } from './services/api';

function App() {
	const [characters, setCharacters] = useState<string[]>([]);
	useEffect(() => {
		getUsers().then((users) => setCharacters(users));
	}, []);

	return (
		<main>
			<h1>Deel.com Frontend Interview - Tomeu Cabot</h1>
			<Searchbar options={characters} />
		</main>
	);
}

export default App;
