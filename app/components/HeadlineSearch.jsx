import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/js/expandable-search';

/**
 * This component handles the Headline search input
 * @class HeadlineSearch
 * @extends {React.Component}
 * @type {Object}
 */
class HeadlineSearch extends React.Component {
  /**
   * HeadlineSearch class constructor
   * @param  {object} props - holds parameters passed from outside the component
   * @return {null}       - returns no value
   */
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }
/**
 * This method handles filtering through the news headlines sources
 * @param {string} event - event parameter
 * @memberof HeadlineSearch
 * @return {null} - no return value
 */
  handleSearch(event) {
    this.setState({
      searchText: event.target.value
    });
    this.props.onSearch(event.target.value);
  }
/**
 * This method renders the component
 * @memberof HeadlineSearch
 * @return {React.Component} - returns hierachy of views for this component
 */
  render() {
    return (
      <div className="input-group searchbar">
        <div className="input-group-button">
          <button className="button search">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M42.117,12.246 C50.1209,12.246 57.797,15.4257 63.453,
                21.0858 C69.1132,26.742 72.2928,34.4178 72.2928,
                42.4218 C72.2928,50.4258 69.1131,58.1018 63.453,
                63.7578 C57.7968,69.418 50.121,72.5976 42.117,72.5976 C34.1131,
                72.5976 26.437,69.4179 20.781,63.7578 C15.1208,58.1016 11.9412,
                50.4258 11.9412,42.4218 C11.9412,34.4178 15.1209,26.7418 20.781,
                21.0858 C26.4372,15.4256 34.113,12.246 42.117,12.246 L42.117,
                12.246 Z M76.0828827,67.3362833 C82.3527829,58.7859894 85.2617455,
                48.0434678 83.9173,37.22271 C82.0618,22.28871 72.3743,
                9.47671 58.5153,3.61771 L58.51139,3.61771 C53.32389,
                1.41851 47.74139,0.28961 42.10539,0.29741 L42.117,0.305 C29.058,
                0.30891 16.742,6.3675 8.769001,16.707 C0.7924008,27.047 -1.933999,
                40.5 1.382301,53.129 C4.698701,65.758 13.6833,76.137 25.7103,
                81.223 L25.7103,81.22691 C39.5733,87.08631 55.5113,
                85.10191 67.5153,76.02771 C67.5852345,75.9748392 67.6549736,
                75.9217748 67.724517,75.8685177 L91.555,99.6990032 L100.0003,
                91.253703 L76.0828827,67.3362833 Z"
              />
            </svg>
          </button>
        </div>
        <input
          className="input-field search-field"
          type="search"
          placeholder="Enter a news source you want"
          value={this.state.searchText}
          onChange={this.handleSearch}
          style={{ marginTop: '15px' }}
        />
      </div>


    );
  }

}
// Setting prop types for HeadlineList component as required by the React documentation
HeadlineSearch.propTypes = {
  onSearch: PropTypes.func
};
// Setting default prop types as required by React Documentation
HeadlineSearch.defaultProps = {
  onSearch: () => {}
};
export default HeadlineSearch;
