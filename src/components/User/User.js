import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const User = ({user}) => {
  console.log(user);
  const date = new Date(user.created_at);
  const joinedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDay()}, ${date.getFullYear()}`;
  return (
    <div className="User rounded-xl shadow-md bg-white grid grid-cols-12 gap-12 p-12 text-left" data-testid="User">
      <div className="col-span-12 md:col-span-3">
        <img src={user.avatar_url} alt={user.name} className="rounded-full" />
      </div>
      <div className="col-span-12 md:col-span-9">
        <header className="flex items-center justify-between">
          <h3>{user.name}</h3>
          <span>{joinedDate}</span>
        </header>
        <a href={user.html_url} className="mb-12">@{user.login}</a>
        <p className="mb-12">{user.bio ? user.bio : 'This profile has no bio'}</p>
        <div className="rounded-xl md:flex justify-between bg-gray-50 mb-12">
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
        <ul className="grid md:grid-cols-12">
          <li className="md:col-span-6">{user.location ? user.location : 'Not Available'}</li>
          <li className="md:col-span-6"><FontAwesomeIcon icon={faTwitter} /> {user.twitter_username ? user.twitter_username : 'Not Available'}</li>
          <li className="md:col-span-6">{user.blog ? user.blog : 'Not Available'}</li>
          <li className="md:col-span-6">{user.company ? user.company : 'Not Available'}</li>
        </ul>
      </div>
    </div>
  );

};
User.propTypes = {};
User.defaultProps = {};

export default User;
