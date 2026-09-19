import React from "react";
import Button from "./Button";
const ProfileCard = () => {
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww"
        alt="Logo"
      />
      <h1>Rahul</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Button />
    </div>
  );
};

export default ProfileCard;
