import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './User.css';

const User = ({user}) => {
  const date = new Date(user.created_at);
  const joinedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getMonth()}, ${date.getFullYear()}`;
  return (
    <div className="User rounded-xl shadow-md bg-white grid grid-cols-12 p-12 text-left" data-testid="User">
      <div className="col-span-12 md:col-span-3">
        <img src={user.avatar_url} alt={user.name} className="rounded-full" />
      </div>
      <div className="col-span-12 md:col-span-9">
        <header className="flex items-center justify-between">
          <h3>{user.name}</h3>
          <span>{joinedDate}</span>
        </header>
        <a href={user.html_url}>@{user.login}</a>
        <p>{user.bio}</p>
        <div className="rounded-xl md:flex justify-between bg-gray-50">
          <p>
            <span>Repos</span><br />
            <strong>{user.public_repos}</strong>
          </p>
          <p>
            <span>Followers</span><br />
            <strong>{user.followers}</strong>
          </p>
          <p>
            <span>Following</span><br />
            <strong>{user.following}</strong>
          </p>
        </div>

      </div>
    </div>
  );

};
User.propTypes = {};
User.defaultProps = {};

export default User;
