import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthGoogleContext } from "../../contexts/authGoogle";
//import "../Home/styles.css";

  export const Home = () => {

  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = JSON.parse(user);
  return (
    <div className="container">
     <h1 className="h1">Oi :) </h1> 
     <h2 className="h2">{userLogado.displayName}</h2> 
      <button type="button" className="button" onClick={() => signOut()}>sair</button>
            <br></br>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/game">Game</Link>
            <Link to="/">Home</Link>
    </div>
  );
};

export default Home;
