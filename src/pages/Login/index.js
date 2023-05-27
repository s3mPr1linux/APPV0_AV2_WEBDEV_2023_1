import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import "../Login/styles.css";

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
      
      return <div className="container">
        <h1 className="h1">Pressione</h1>
        <button type="button" className="button" onClick={handleLoginFromGoogle}>
          Login
        </button>
      </div> 
  } else {
    return <Navigate to="/Home" />;
  }
};

export default Login;