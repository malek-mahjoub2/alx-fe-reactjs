import React from 'react';
const UserProfile = (props) => {
    return (
      <div className="user-profile" style={{border:'2px solid pink',padding: '5px',margin:'10px'}}>
        <h2 style={{fontSize: '10px',color: 'red',textDecoration:'underline'}}>{props.name}</h2>
        <p style={{fontSize:'10px',color:'red',textDecoration: 'underline'}}>Age: {props.age}</p>
        <p style={{fontSize:'10px',color:'red',textDecoration: 'underline'}}>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;