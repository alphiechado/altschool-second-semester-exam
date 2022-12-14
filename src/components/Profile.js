import React, { useContext } from 'react';
import { SigninContext } from '../context/SigninContext';
import Asset8 from '../assets/Asset8.png';
import Footer from './Footer';

function Profile() {
  const { username } = useContext(SigninContext);
  return (
    <>
      <div className="Profile">
        <div>
          <h1 className="Profileheader">Welcome</h1>
          <h2 className="Profileheader2">{username}</h2>
          <p className="Profilepara">We are glad you are here.</p>
        </div>
        <div>
          <img className="Profileimage" src={Asset8} alt="Homeimage" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
