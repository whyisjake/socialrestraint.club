import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.postMessage = this.postMessage.bind(this);
  }

  postMessage() {
    window.FB.ui({
      method: 'share',
      href: document.location.href,
      hashtag: '#socialrestraint',
      quote: `I, ${this.props.name} join others in taking back my time, calling on social media companies to be more responsible, and using social media in a positive way.`,
    }, function (response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
      { console.log(this.props) }
        {this.props.name &&
          <div className="row">
          <div className="col-2">
            {this.props.picture.data.url &&
              <img src={this.props.picture.data.url} alt={this.props.name} />
            }
          </div>
          <div className="col-10">
            <h2 className="section-heading text-white text-left">
              <em>I, {this.props.name} join others in taking back my time, calling on social media companies to be more responsible, and using social media in a positive way.</em>
            </h2>
            <button className="btn btn-light btn-lg js-scroll-trigger" onClick={this.postMessage}>Share</button>
          </div>
          </div>
        }
      </div>
    )
  }
}
