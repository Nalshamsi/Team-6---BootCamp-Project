import * as React from "react";
import "./UserAvatar.css";

const UserAvatar = ({ src, alt, className, ...props }) => {
  const placeholder = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvssmn.org%2F146-1468479_my-profile-icon-blank-profile-picture-circle-hd%2F&psig=AOvVaw0mz8q8eizcxtRvjh2A7L7P&ust=1670949225885000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiN_YrB9PsCFQAAAAAdAAAAABAX';
  const handleOnError = (e) => {
    e.target.src = placeholder
  }
  return (
    <div>
      {src ? (<img {...props} className={`defaultClass ${className}`} src={src} alt={alt} onError={handleOnError} />) : (<img {...props}  className={`defaultClass ${className}`} src={placeholder} alt={alt} />)}
    </div>
  );
}

export default UserAvatar;