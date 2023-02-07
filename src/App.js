
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import image from './Profile/Capture.png';


function App() {
  const handleName =nom=> alert (`my name is ${nom}`);

 
  const profile={
    fullName:'Sahar Amami',
    bio:'Femme ingénieur chercheuse responsable motivée et rigoureuses, passionnée par les nouvelles technologies avec des bonnes capacités d’analyse et de synthèse. Active dans la vie associative en participant aux plusieurs événements et projets.',
    profession: 'Ingenieur ',
    
  };
  return (
    <div className='App'>
    
   <ProfileComponent profile={profile} handleName={handleName}>
   <img style={{borderBlock : "none", width : '200px', height : '300px',border : '75px'}} src={image} alt="name"/>
   </ProfileComponent>
   
   </div>
  );
}

export default App;
