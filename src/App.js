import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const UserProfiles = () => {

  const [UserProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/students").then(res => {
      console.log(res);
      setUserProfiles(res.data);
    });
  }

  useEffect(()=>{
    fetchUserProfiles();
  }, []);

  return  UserProfiles.map((userProfile, index) =>{
    return (
      <div key={index}>
        <h1>{userProfile.firsName} {userProfile.lastName}</h1>
        <h2>Email: {userProfile.email}</h2>
        <h2>Gender: {userProfile.gender}</h2>
        <h2>Country: {userProfile.address['country']}</h2>
        <h2>City: {userProfile.address['city']}</h2>
        <h2>Postal Code: {userProfile.address['postCode']}</h2>
        <h2>Favorite Subjects: {userProfile.favoriteSubjects[0]}, {userProfile.favoriteSubjects[1]}</h2>
        <h2>Total spent in books: {userProfile.totalSpentInBooks}</h2>
        <h2>Created: {userProfile.created} Local Time</h2>

      </div>
    )
  })
}

function App() {
  return (
    <div className='App'>
      <UserProfiles />
    </div>
  );
}

export default App;
