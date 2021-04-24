import {useState,useEffect} from 'react'
import {firebaseConfig} from '../firebase/firebase'


const Credential = () => {

const [user, setUser] = useState()
const [email, setEmail] = useState()
const [password, setpassword] = useState()
const [emailError, setEmailError] = useState()
const [passwordError, setPasswordError] = useState()
const [hasAccount, sethasAccount] = useState()


const handleLogin=()=>{
        
     firebaseConfig
     .auth()
     .signInWithEmailAndPassword(email,password)
     .catch(err=>
        {
            switch(err.code)
            {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);           
                    break;
                }
        })
      alert("You are being logged in!"); 
    }

    const handleSignup=()=>{
        console.log("Signup clicked");
        clearErrors();
        firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err=>
           {
               switch(err.code)
               {
                   case "auth/email-already-in-use":
                   case "auth/invalid-email":
                   
                       setEmailError(err.message);
                       break;
                   case "auth/weak-password":
                       setPasswordError(err.message);           
                       break;
                   }
           })
         
   }

return (

    <div>

    </div>

)

}

export default Credential;

