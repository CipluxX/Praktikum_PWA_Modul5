// src/pages/Profile.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const profileData = {
    name: "Karen and Plankton",
    username: "@bocah_toko",
    bio: "Passionate reader and aspiring writer. Love to explore new worlds through books.",
    avatar: "https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/457870591_533190779378629_4464838520390720726_n.jpg?ccb=11-4&oh=01_Q5AaIEuPf3_UgUr1kb-6es_tekCM25pxTP-Gt38OqgTHQF-l&oe=672F37A9&_nc_sid=5e03e0&_nc_cat=101",
    stats: {
      booksRead: 42,
      following: 120,
      followers: 85
    },
    favoriteGenres: ["Science Fiction", "Mystery", "Classic Literature"]
  };

  const groupMembers = [
    {
      name: "Muhammad Azhar Renaldi",
      id: "21120122140121",
      avatar: "https://i.pinimg.com/564x/e9/22/20/e9222062e7472f3bbba715d632e76118.jpg"
    },
    {
      name: "Bapang Panggalih",
      id: "21120122140106",
      avatar: "https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/462730903_1242461066792420_1718280136032984055_n.jpg?ccb=11-4&oh=01_Q5AaIK0O5eFXIclaeCCiSc3axlPXdOzAQ8aBken5nnpga-8W&oe=672F501D&_nc_sid=5e03e0&_nc_cat=107"
    },
    {
      name: "Billy Khoiri Najwan",
      id: "21120122120016",
      avatar: "https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/442235034_401757689595838_8771155937980389482_n.jpg?ccb=11-4&oh=01_Q5AaIJddvGluBKqPgtjyJGhE_mHsx4dBYQg6s3iJh2IB_Fgp&oe=672F2CD4&_nc_sid=5e03e0&_nc_cat=110"
    },
    {
      name: "Delon Tarigan",
      id: "21120122130077",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFJ8BJ9t_V4LA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715779872885?e=1733356800&v=beta&t=D169IEQ34iYfBghTbHUTHgLbmzWnH3rsEfIRLGWuDPs"
    }
  ];

  const handleLogout = () => {
    // Clear the login state
    localStorage.removeItem('isLoggedIn');
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileData.avatar} alt="Profile" className="profile-avatar" />
        <h1>{profileData.name}</h1>
        <p className="username">{profileData.username}</p>
        <p className="bio">{profileData.bio}</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="favorite-genres">
        <h2>Favorite Genres</h2>
        <ul>
          {profileData.favoriteGenres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>

      <div className="group-members">
        <h2>Group Member</h2>
        {groupMembers.map((member, index) => (
          <div key={index} className="member-item">
            <img src={member.avatar} alt={member.name} className="member-avatar" />
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-id">{member.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;