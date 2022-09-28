import Suggestion from '../Suggestion';
import './SuggestionList.css';

type SuggestionListType = {
	suggestions: string[];
	highlight: string;
	onSelect: (suggestion: string) => void;
	hasFocus: boolean;
};

export const SuggestionList: React.FC<SuggestionListType> = ({
	suggestions,
	highlight,
	onSelect,
	hasFocus,
}) => {
	return (
		<ul
			className={`SuggestionList ${hasFocus ? 'SuggestionList--is-open' : ''}`}
		>
			{suggestions
				.filter((option) =>
					option.toLowerCase().includes(highlight.toLowerCase())
				)
				.map((option) => (
					<Suggestion
						key={option}
						value={option}
						search={highlight}
						onClickSuggestion={onSelect}
					/>
				))}
		</ul>
	);
};
