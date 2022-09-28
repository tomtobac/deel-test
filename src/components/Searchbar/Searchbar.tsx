import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import SuggestionList from '../SuggestionList';
import './Searchbar.css';

type SearchbarType = {
	options: string[];
};

export const Searchbar: React.FC<SearchbarType> = ({ options }) => {
	const [currentSearch, setSearch] = useState('');
	const ref = useRef(null);
	const [isOpen, setOpen] = useState(false);
	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setSearch(event.currentTarget.value);
	};
	const handleClickSuggestion = (suggestion: string) => {
		setSearch(suggestion);
		setOpen(false);
	};
	useOnClickOutside(ref, () => setOpen(false));

	return (
		<fieldset ref={ref} className="Searchbar">
			<label className="Searchbar__label" htmlFor="searchbar">
				Search Rick and Morty Characters
			</label>
			<input
				onFocus={() => setOpen(true)}
				className="Searchbar__input"
				name="sarchbar"
				id="searchbar"
				type="text"
				value={currentSearch}
				onChange={handleChange}
			/>
			<SuggestionList
				suggestions={options}
				hasFocus={isOpen}
				highlight={currentSearch}
				onSelect={handleClickSuggestion}
			/>
		</fieldset>
	);
};
