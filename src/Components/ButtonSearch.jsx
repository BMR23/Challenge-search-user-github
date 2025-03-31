import PropTypes from "prop-types"

function ButtonSearch({stylesButton, stylesIcon}) {
  return (
    <button type="submit" className={stylesButton}>
        <svg className={stylesIcon}
        xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="10" cy="10" r="8"/>
        <line x1="23" y1="23" x2="16.65" y2="16.65"/>
        </svg>
    </button>
  );
}

ButtonSearch.propTypes = {
    stylesButton: PropTypes.string,
    stylesIcon: PropTypes.string
}

export default ButtonSearch;