import React,{ useContext } from 'react';
import logo from '../../images/logos/logo.png'
import * as firebase from "firebase/app";
import './Login.css';
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleLogin=()=>{
        
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const createdUser = result.user;
            setUser({ name: createdUser.displayName, email: createdUser.email, photo: createdUser.photoURL })
           
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
        console.log('check')
        
    }
    return (
        <section className='text-center p-4'>
            <img className='m-5' src={logo} width='150' alt="" />
            <div className='m-auto login-areas'>
                <div className="my-5 py-5 mx-3">
                    <h2 className='login-box mt-3'  >Login With</h2>
                    <div onClick={handleLogin} className="google-box my-4">
                        <p>Continue with Google</p>
                    </div>
                    <p>Don’t have an account? <span onClick={handleLogin} className="create-account" >Create an account</span></p>
                </div>
            </div>
        </section >
    );
};

export default Login;