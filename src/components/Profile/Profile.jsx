import React from "react";
import "./profile.css";
function Profile(props) {
  return (
    <figure className="profile-container">
      <a href={props.link}>
        <img className="profileImg" src={props.img} alt={props.name} />
        <figcaption class="caption">{props.name}</figcaption>
      </a>
    </figure>
  );
}

export default Profile;
