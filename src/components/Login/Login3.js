import React, { useContext, useState } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login3 = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    //usecontext to set logged in user info
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //redirect after loggedin
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [pswd, setPswd] = useState('');

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    //sign in with google
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    //
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(signedInUser);

                setLoggedInUser(signedInUser); //sent user data to context
                history.replace(from); // reactrouter redirect loginpage function

                console.log(displayName, photoURL, email)
            })
            .catch(err => {
                console.log(err)
            })
        // console.log('signed in click')
    }


    // sign Out
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedoutuser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: ''
                };
                setUser(signedoutuser);
                console.log('sign out successful');
            }
            )
            .catch(err => { console.log(err) })
    }

    //update username
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            console.log('user name updated')
            // Update successful.
        }).catch(function (error) {
            console.log(error)
            // An error happened.
        });
    }

    //
    const handleSubmit = (e) => {
        console.log(user.email, user.password);


        //create new user
        if (newUser && user.email && user.password && user.confirmpassword) {
            console.log('submitting..')

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    const newUser = { ...user };
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser);
                    updateUserName(newUser.name);
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // ..
                    const newUser = { ...user };
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser)
                    console.log(error)
                });

        }
        //signIn with existing user
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    // Signed in 
                    // const user = userCredential.user;
                    const newUser = { ...user };
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser);

                    setLoggedInUser(newUser); //sent user data to context
                    history.replace(from); // reactrouter redirect loginpage function

                    updateUserName(newUser.name)
                    console.log('sign in user info:', result.user)
                    // ...
                })

                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // ..
                    const newUser = { ...user };
                    newUser.error = error.message;
                    newUser.success = false;
                    setUser(newUser)
                    console.log(error)
                });

        }

        e.preventDefault();
        console.log('own submit clicked')
    }
    //
    const handleBlur = (evnt) => {
        let isFieldValid = false;
        // let pswd = 'd';
        if (evnt.target.name === 'email') {
            const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex valid email pattern
            // re.test(evnt.target.value) ? console.log('valid email') : console.log('invalid email') //regex.test(whattoteststring) return true/false
            // console.log(evnt.target.value)
            // const isEmailValid = re.test(evnt.target.value);
            isFieldValid = re.test(evnt.target.value);
            // console.log(isEmailValid)
            isFieldValid ? console.log('email valid') : console.log('email is invalid');
        }
        if (evnt.target.name === 'password') {
            setPswd(evnt.target.value);
            // console.log(pswd,evnt.target.value);
            console.log('psw', evnt.target.value);
            const isPasswordValid = evnt.target.value.length > 6;
            console.log(isPasswordValid)
            const re = /\d{1}/;
            const passwordHasNumber = re.test(evnt.target.value);
            // console.log(isPasswordValid && passwordHasNumber);
            isFieldValid = isPasswordValid && passwordHasNumber;

            isFieldValid ? console.log('password valid') : console.log('password is invalid');
        }
        if (evnt.target.name === 'confirmpassword') {
            console.log('plpl', pswd)
            const passmatched = pswd === evnt.target.value;
            isFieldValid = passmatched;
            isFieldValid ? console.log('pswrd matched') : console.log('paswd not matched');
        }
        if (isFieldValid) {
            console.log('test conpasvalid', isFieldValid)
            //[...cart,newcart]
            const newUserInfo = { ...user }; //copy object
            newUserInfo[evnt.target.name] = evnt.target.value; //set object property
            setUser(newUserInfo)
        }
        console.log(evnt.target.name, evnt.target.value);
        // console.log(event.target.value)

    }
    // const testSubmit = (e) => {
    //     console.log('test form sumbitted ');
    //     console.log(user.email, user.password);
    //     e.preventDefault();
    // }

    return (
        <div>


            <div className='login-container'>
                {!newUser &&
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className='form-inside'>
                            <h2>Login</h2>
                            <input type='text' name="email" placeholder='Email' required onBlur={handleBlur} />
                            <input type='password' name="password" placeholder='Password' required onBlur={handleBlur} />
                            <input type="submit" value='Login' />
                            <p style={{ textAlign: 'center' }}>Dont' have an account? <span style={{ color: 'red' }} onClick={() => setNewUser(!newUser)}>Create an account</span></p>
                        </div>
                    </form>
                }

                {newUser &&
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className='form-inside'>
                            <h2>Create an account</h2>
                            <input name="name" placeholder='Name' onBlur={handleBlur} />
                            <input name="email" placeholder='Email' required onBlur={handleBlur} />
                            <input type='password' name="password" placeholder='Password' required onBlur={handleBlur} />
                            <input type='password' name="confirmpassword" placeholder='Confirm Password' required onBlur={handleBlur} />
                            <input type="submit" value='Create an account' />
                            <p style={{ textAlign: 'center' }}>Already have an account? <span style={{ color: 'red' }} onClick={() => setNewUser(!newUser)}>Login</span></p>
                        </div>
                    </form>
                }








                <div className='google-signIn'>
                    <p>----------------Or---------------</p>

                    <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} style={{ marginRight: '2rem' }} /><span >Continue with Google</span></button>


                </div>
            </div>


            {
                user.isSignedIn && <div>
                    <p>User Name: {user.name}</p>
                    <p>Photo: <img src={user.photo} alt="" /></p>
                    <p>Email: {user.email}</p>
                </div>

            }



            <div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}> User {newUser ? 'created' : 'Logged In'} successfully</p>
                }
            </div>



        </div>
    );
};

export default Login3;