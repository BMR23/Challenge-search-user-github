import GitHubWhite from '@images/github/github-mark/github-mark-white.svg'

import PropTypes from "prop-types"

function GithubLogo({styles}) {
  return (
    <img src={GitHubWhite} alt="" className={styles} />
  );
}

GithubLogo.propTypes = {
  styles: PropTypes.string
}

export default GithubLogo;