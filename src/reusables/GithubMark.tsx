import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import GitHubMark from "../assets/images/GitHub-Mark.png";
import GitHubLogo from "../assets/images/GitHub-Logo.png";
import APP_PATHS from '../config/paths.routes';
import { GithubMarkProps } from './types';

const GithubMark = ({markClassName, logoClassName, parentClassName}: GithubMarkProps) => {
  const navigate = useNavigate();

  return (
    <button
    className={clsx("flex items-center justify-start gap-1", parentClassName)}
    onClick={() => navigate(APP_PATHS.HOME)}
  >
    <img
      alt="Github Mark"
      src={GitHubMark}
      className={clsx("w-12 h-12 object-cover", markClassName)}
    />
    <img alt="Github Logo" src={GitHubLogo} className={clsx("h-10", logoClassName)} />
  </button>
  )
}

export default GithubMark