import { combineReducers } from 'redux';
import TVShowsReducer from './reducer_tvshows';
import ActiveTVShow from './reducer_active_tvshow';
import SearchAPI from './reducer_search_api';

const rootReducer = combineReducers({
  tvShows: TVShowsReducer,
  activeTVShow: ActiveTVShow,
  searchResult: SearchAPI
});

export default rootReducer;