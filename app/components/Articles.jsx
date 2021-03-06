import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import showFavouriteToast from '../styles/components/js/favourite-button';


/**
 * This component renders Articles
 * @class Articles
 * @extends {React.Component}
 * @type {String}
 */
export default class Articles extends React.Component {

/**
 * This is the Articles class cosntructor
 * @param  {array} props - contains prop parameters
 * @return {null}       - returns nothing
 */
  constructor(props) {
    super(props);
    this.saveFavourites = this.saveFavourites.bind(this);
  }
/**
 * This function saves favourite articles
 * @param {object} event - the event object
 * @return {null} - returns nothing
 */
  saveFavourites(event) {
    const favourite = {
      title: this.props.title,
      description: this.props.description,
      url: this.props.url,
      urlToImage: this.props.urlToImage,
      author: this.props.author,
      like: 'button liked',
    };
    showFavouriteToast(event.target.id, favourite);
  }
/**
 * This function renders the hierachy of views for Article component
 * @return {React.Component} returns a react component
 */
  render() {
    const {
      title,
      description,
      url,
      urlToImage,
      author,
      like,
    } = this.props;
    const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const GooglePlusIcon = generateShareIcon('google');
    const LinkedinIcon = generateShareIcon('linkedin');
    return (

      <div className="wide-article-link">
        <div className="row">
          <div className="small-12 medium-9 columns">
            <h4 className="article-title">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h4>
            <p
              className="article-author"
            >
              <em>by
                  {!author ? ' Anonnymous' : ` ${author}` }
              </em>
            </p>
            <p
              className="article-elipsis"
            >{description}
              <a
                href={url}
                target="_blank" rel="noopener noreferrer" className="read-more"
              >...Read more
              </a></p>
            <div className="article-social">

              <a className="button social facebook">
                <FacebookShareButton url={url}>
                  <FacebookIcon size={20} round />
                </FacebookShareButton>
              </a>
              <a className="button social twitter">
                <TwitterShareButton url={url}>
                  <TwitterIcon size={20} round />
                </TwitterShareButton>
              </a>
              <a className="button social linkedin">
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={20} round />
                </LinkedinShareButton>
              </a>
              <a className=" button social google-plus">
                <GooglePlusShareButton url={url}>
                  <GooglePlusIcon size={20} round />
                </GooglePlusShareButton>
              </a>
              <a className="button" style={{ backgroundColor: 'white' }}>
                <button
                  id={title}
                  className={!like ? 'button-like' : like}
                  onClick={this.saveFavourites}
                >
                  <i className="fa fa-heart" style={{ marginRight: '5px' }} />
                  Favourite
                </button>
              </a>
              <div id="snackbar">Added to favourites</div>
              <div id="unFavourite">Removed from favourites</div>
            </div>
          </div>
          <div
            className="small-12 medium-3 columns flex-container align-middle"
          >
            <img src={urlToImage} alt="Not  available" />
          </div>
        </div>
      </div>


    );
  }
}

// Setting prop types for Article component as required by the React documentation
Articles.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  like: PropTypes.string
};

// Setting default prop types as required by React Documentation
Articles.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  like: ''
};
