import React, { useContext} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import './User.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faLink, faCity  } from '@fortawesome/free-solid-svg-icons';
import UserStat from '../UserStat/UserStat.js';
import UserInfo from '../UserInfo/UserInfo.js';

const User = ({user}) => {
  console.log(user);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  const date = new Date(user.created_at);
  const joinedDate = `${date.getDay()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
  return (
    <div className={`User rounded-xl shadow-md grid grid-cols-12 sm:gap-10 p-6 md:p-12 text-left ${darkMode ? 'bg-darkGray text-offWhite' : 'bg-white text-blueGray'}`} data-testid="User">
      <div className="col-span-12 sm:col-span-3">
        <img src={user.avatar_url} alt={user.name} className="rounded-full" />
      </div>
      <div className="col-span-12 sm:col-span-9">
        <header className="flex items-center justify-between flex-wrap mb-6">
          <h1>{user.name}</h1>
          <a href={user.html_url} className="text-blue lg:order-3 w-full text-lg">@{user.login}</a>
          <p className="lg:order-2">Joined {joinedDate}</p>
        </header>
        <p className="mb-12">{user.bio ? user.bio : 'This profile has no bio'}</p>
        <div className={`rounded-xl md:grid grid-cols-12 bg-gray-50 py-6 px-8 mb-12 ${darkMode ? "bg-darkGrayTwo" : "bg-lightGray"}`}>
          <UserStat name="Repos" stat={user.public_repos} />
          <UserStat name="Followers" stat={user.followers} />
          <UserStat name="Following" stat={user.following} />
        </div>
        <ul className="grid md:grid-cols-12">
          <UserInfo mark={faMapMarkerAlt} info={user.location}/>
          <UserInfo mark={faTwitter} info={user.twitter_username}/>
          <UserInfo mark={faLink} info={user.blog} />
          <UserInfo mark={faCity} info={user.company}/>
        </ul>
      </div>
    </div>
  );

};
User.propTypes = {};
User.defaultProps = {};

export default User;
