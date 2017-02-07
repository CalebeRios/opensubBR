import React, { Component } from 'react';
import { connect } from 'react-redux';

class TVShowSearchResult extends Component {

  renderSearchResult() {
    if(!this.props.searchResult) {
      return <div>Esperando Busca...</div>
    } else {
    return this.props.searchResult.pb.map( (sub) => {
        return (
          <div className="collection-item"
          key={sub.date}>
            <li>
            <div>
              <h12>Nome: {sub.subFilename}</h12>
              <br/>
              <h12>Quantidade de Downloads: {sub.downloads}</h12>
              <br/>
              <div className="chip">
                <a href={sub.url}>Download</a>
              </div>
            </div>
            </li>
          </div>
        );
      });
    }
  }
  render() {

    return (
      <ul className="collection">
        {this.renderSearchResult()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps)(TVShowSearchResult);