import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import * as firebase from "firebase/app";
import './Login.css';
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } };
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {

        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { email, displayName, photoURL } = result.user;
                fetch(`http://localhost:5000/findAdmin?email=${email}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data[0]) {
                            const logInUser = {
                                name: displayName,
                                email: email,
                                photo: photoURL,
                                isAdmin: true
                            }
                            setUser(logInUser)


                        }

                        else {
                            const logInUser = {
                                name: displayName,
                                email: email,
                                photo: photoURL,
                                isAdmin: false
                            }
                            setUser(logInUser)

                        }
                        
                    }
                    )
                   
            })


            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    if(user.email){
        sessionStorage.setItem('user', user.email)
        history.replace(from)
    }
   

    return (
        <section className='text-center p-4'>
            <Link to="/home">
            <img className='m-5' src={logo} width='150' alt="" />
            </Link>
            <div className='m-auto login-areas'>
                <div className="my-5 py-5 mx-3">
                    <h2 className='login-box mt-3'  >Login With</h2>
                    <div onClick={handleLogin} className="google-box my-4">
                        <p>Continue with Google</p>
                    </div>
                    <p>Don’t have an account? <span onClick={handleLogin}   className="create-account" >Create an account</span></p>
                </div>
            </div>
        </section >
    );
};



export default Login;