import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestSearch, contentStatusChange } from '../actions/index';


class TVShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {season_search:'', episode_search:''}
  }

  onInputChangeSeason(season) {
    this.setState({season_search: season});
  }

  onInputChangeEpisode(episode) {
    this.setState({episode_search: episode});
  }

  sendSearchRequest() {

    const tvShowSearchTerms = this.props.tvShow;
    const seasonSearchTerm = parseInt(this.state.season_search);
    const episodeSearchTerm = parseInt(this.state.episode_search);

    tvShowSearchTerms.season = seasonSearchTerm;
    tvShowSearchTerms.episode = episodeSearchTerm;

    this.props.requestSearch(tvShowSearchTerms)
    .then( ()=> {
      this.props.contentStatusChange(true);
    });
  }

  onClickSearch() {
    if (!this.props.searchContentStatus) {
      this.sendSearchRequest();
    } else {
      this.props.contentStatusChange(false);
      this.sendSearchRequest();
    }
  }

  render () {
    return (
      <div className="row">
        <div className="col s8">
          <form>
            <label>Season</label>
            <input
              value={this.state.season_search}
              onChange={event => this.onInputChangeSeason(event.target.value)} >
            </input>
            <label>Episode</label>
            <input
            value={this.state.episode_search}
            onChange={event => this.onInputChangeEpisode(event.target.value)} />
          </form>
          <a className="waves-effect waves-light btn"
          onClick={() => this.onClickSearch()}>
          Search
          </a>
        </div>
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    tvShow: state.activeTVShow,
    searchResult: state.searchResult,
    searchContentStatus: state.searchContentStatus

  };
}

export default connect(mapStateToProps, {requestSearch, contentStatusChange})(TVShowForm);
