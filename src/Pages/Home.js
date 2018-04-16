import React from "react";
import Pledge from "../components/Pledge";
import Users from "../components/Users";
import Services from "../components/Services";
import Media from "../components/Media";
import UserList from "../users.json";

export default class SocialRestraint extends React.Component {
  render() {
    return (
      <div>
        <Pledge />
        <Users users={UserList} />
        <Services />
        <Media />
      </div>
    );
  }
}
