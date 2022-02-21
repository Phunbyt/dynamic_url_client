import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserPage = ({ username }) => {
    const [user, setUser] = useState(null);
    useEffect(async () => {
       const { data } = await axios.get(
         `http://localhost:5000/users/getuser/${username}`
       );
        setUser(data);
       console.log(data);
    
     
    }, [])
    
  return (
    <div>
          {user ? (<>
          <h1>Hello {user.username}</h1>
      <p>
        {user.firstName} is your first name, and {user.lastName} is your last name.
              </p>
          </>) : <h1>Loading...</h1> }
    </div>
  );
}

export default UserPage