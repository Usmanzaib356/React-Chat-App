import { auth , provider} from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookies from "universal-cookie"; 
const cookies = new Cookies()

export const Auth = (props) => {
    const {setIsAut} = props
  const signInWithGoogle = async ()=>{
    try{
   const result =   await signInWithPopup(auth,provider)
   cookies.set("auth-token",result.user.refreshToken)
   setIsAut(true)
    } catch(err){
        console.error(err);
    }
  };

    return (
        <div className="auth">
            <p>Sing IN with Google to continue </p>
            <button onClick={signInWithGoogle}>Sing IN with Google</button>
        </div>
    );
};