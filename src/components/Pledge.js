import React from "react";
import { Button } from "reactstrap";
import LoggedInUser from "./LoggedInUser";

export default class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: {},
      isToggleOn: true,
      isLoggedIn: false,
      response: {},
      user: {},
      test: {}
    };

    // This binding is necessary to make `this` work in the callback
    this.checkLoginState = this.checkLoginState.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        //eslint-disable-line no-undef
        appId: "2100059763598941",
        cookie: true, // enable cookies to allow the server to access
        xfbml: true, // parse social plugins on this page
        version: "v2.1" // use version 2.1
      });

      // Now that we've initialized the JavaScript SDK, we call
      // window.FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.
      window.FB.getLoginStatus(
        function(response) {
          this.statusChangeCallback(response);
        }.bind(this)
      );
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI() {
    window.FB.api(
      "/me",
      { fields: "first_name,last_name,email,name,picture.type(large),cover" },
      function(response) {
        this.setState({ user: response });
        window.fbq("trackCustom", "test", { state: this.state });
      }.bind(this)
    );
  }

  login() {
    window.FB.login(
      function(response) {
        this.setState({ user: response });
        this.testAPI();
        window.fbq("trackCustom", "login", { state: this.state });
      }.bind(this)
    );
  }

  // This is called with the results from from window.FB.getLoginStatus().
  statusChangeCallback(response, login = false) {
    console.log("Login", login);
    this.setState({ response: response });
    console.log("statusChangeCallback");
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for window.FB.getLoginStatus().
    if (response.status === "connected") {
      // Logged into your app and Facebook.
      this.testAPI();
      window.fbq("trackCustom", "connected", { state: this.state });
    } else if (response.status === "not_authorized") {
      // The person is logged into Facebook, but not your app.
      console.log("Need to login to the app.");
      if (login) {
        this.login();
      }
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      console.log("Please log into Facebook.");
      if (login) {
        this.login();
      }
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState(login = false) {
    window.FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response, login);
      }.bind(this)
    );
  }

  render() {
    return (
      <section className="bg-primary" id="pledge">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-white">
                Take Back Your Time
              </h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">
                Join us in taking back your time, calling on social media
                companies to be more responsible, and using social media in a
                positive way.
              </p>
              <p className="text-faded mb-4">
                Don't bookend your day with social media. Spend the first and
                last hour of the day without your phone on social media, and see
                what kind of changes you will find in your life.
              </p>
              {!this.state.user.id && (
                <Button
                  className="btn btn-light btn-lg js-scroll-trigger"
                  id="loginButton"
                  onClick={() => this.checkLoginState(true)}
                >
                  Join the Club
                </Button>
              )}
              <LoggedInUser
                {...this.state.user}
                postMessage={this.postMessage}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
