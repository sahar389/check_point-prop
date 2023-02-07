import React from 'react'
import PropTypes from 'prop-types'


const ProfileComponent = (props) => {
  const {profile,children,handleName} =props;
  const {fullName,bio,profession}=profile;

  const handleClick =(bouton)=>{handleName(fullName)};
  

  return (
    <div>
      
        <p style={{color: "#951d86" , fontFamily :"fangsong" , fontSize :"xx-large" ,textAlign:"left"}}>Hello, my name is </p>
        <h1 style={{textAlign: "center",color :"#467289"}}><span className="rotate text-important"> {fullName}</span></h1> ,<br />
        <p  style={{color: "#951d86" , fontFamily :"fangsong" , fontSize :"x-large" ,textAlign:"left"}}>and I'm a </p>
        <p style={{textAlign: "left" ,fontFamily:"serif"}}>{bio}</p>.
      
      <h1 style={{ textAlign: "left",color :"#467289"}}>MY Profession</h1>
      <p  style={{color: "#951d86" , fontFamily :"fangsong" , fontSize :"xx-large" ,textAlign:"left"}}>{profession}</p>
      
      {children}
      <a style={{textAlign: "left" ,ontFamily :"fangsong"}} href="#!" onClick={handleClick}>
      Clique ici
      </a>


      
      
      
    </div>
  )
};
ProfileComponent.defaultProps = {
  profile: 'Default profile',
  handleName:'Default handelName'
};
ProfileComponent.propTypes = {
  profile: PropTypes.object,
  handleName :PropTypes.func,
};

export default ProfileComponent