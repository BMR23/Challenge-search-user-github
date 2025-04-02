import PropTypes from "prop-types"

function ButtonSearch({ref, funcOnClick, stylesButton, stylesIcon}) {
  return (
    <button type="submit" className={stylesButton} ref={ref} onClick={funcOnClick}>
        <svg 
          className={stylesIcon}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
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