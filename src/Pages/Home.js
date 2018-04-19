import React from "react";

// Components
import Footer from "../components/Footer";
import Media from "../components/Media";
import Pledge from "../components/Pledge";
import Services from "../components/Services";
import Users from "../components/Users";

import UserList from "../users.json";

export default class SocialRestraint extends React.Component {
  render() {
    return (
      <div>
        <Pledge />
        <Users users={UserList} />
        <Services />
        <Media />
        <Footer />
      </div>
    );
  }
}
