import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async () => {
    setIsLoading(true);
    const { data } = await axios.post(
      'http://localhost:5000/users/createuser',
      {
        firstName,
        lastName,
        username,
      }
    );

    window.location.href = `http://${data.username}.localhost.com`;
    setIsLoading(false);
  };
  return (
    <div>
      <div>
        <h3>first name</h3>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <h3>last name</h3>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <h3>username</h3>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <button onClick={handleRegister} type="submit">
          {isLoading ? 'Please wait...' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default Home;
