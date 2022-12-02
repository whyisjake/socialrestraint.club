import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.postMessage = this.postMessage.bind(this);
  }

  postMessage() {
    window.FB.ui(
      {
        method: "share",
        href: document.location.href,
        hashtag: "#socialrestraint",
        quote: `I, ${
          this.props.name
        }, join others in taking back my time, calling on social media companies to be more responsible, and using social media in a positive way.`
      },
      function(response) {
        console.log(response);
        window.fbq("trackCustom", "pledge", {
          response: response,
          props: this.props
        });
      }
    );
  }

  render() {
    return (
      <div>
        {this.props.name && (
          <div>
            <div className="row">
              <div className="col-3">
                {this.props.picture.data.url && (
                  <img
                    className="img-fluid"
                    src={this.props.picture.data.url}
                    alt={this.props.name}
                  />
                )}
              </div>
              <div className="col-9">
                <h2 className="section-heading text-white text-left">
                  <em>
                    I, {this.props.name}, join others in taking back my time,
                    calling on social media companies to be more responsible,
                    and using social media in a positive way.
                  </em>
                </h2>
              </div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-8 offset-2">
                <button
                  className="btn btn-light btn-block btn-lg js-scroll-trigger"
                  onClick={this.postMessage}
                  target="_top"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
