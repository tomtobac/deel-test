import './Suggestion.css';

type SuggestionType = {
	value: string;
	search: string;
	onClickSuggestion: (suggestion: string) => void;
};

export const Suggestion: React.FC<SuggestionType> = ({
	value,
	search,
	onClickSuggestion,
}) => {
	const regExp = new RegExp(search, 'i');
	const result = value.match(regExp);
	const onClick = () => onClickSuggestion(value);
	let Word = <span>{value}</span>;
	if (result && search.length > 0) {
		const startIndex = result.index as number;
		Word = (
			<span>
				{value.split('').map((letter, idx) => (
					<span
						key={letter + idx}
						className={
							idx >= startIndex && idx <= startIndex + search.length
								? 'Suggestion__highlight'
								: ''
						}
					>
						{letter}
					</span>
				))}
			</span>
		);
	}
	return (
		<li className="Suggestion">
			<button className="Suggestion__btn" type="button" onClick={onClick}>
				{Word}
			</button>
		</li>
	);
};
