import { useStarredShows } from '../lib/useStarShow';

function Starred() {
  const [starredShows] = useStarredShows();
  return <div>Starred Page, Starred: {starredShows.length}</div>;
}

export default Starred;
