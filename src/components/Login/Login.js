import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useForm } from 'react-hook-form';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';




const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    handleSubmit1(data);
    console.log(data);
  };
  console.log(watch("email")); // you can watch individual input by

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
        console.log(displayName, photoURL, email)
      })
      .catch(err => {
        console.log(err)
      })
    // console.log('signed in click')
  }

//
//update username
const updateUserName = name => {
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  // photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  console.log('user name updated')
  // Update successful.
}).catch(function(error) {
  console.log(error)
  // An error happened.
});
}
//
const handleSubmit1 = (e) => {
  console.log(user.email, user.password);


  //create new user
  if (newUser && user.email && user.password) {
    console.log('submitting..')

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        const newUser = { ...user };
        newUser.error = '';
        newUser.success = true;
        setUser(newUser)
        updateUserName(newUser.name)
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
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        const newUser = { ...user };
        newUser.error = '';
        newUser.success = true;
        setUser(newUser)
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

  
  console.log('own submit clicked')
}



  return (
    <>
      <Header></Header>
      <div className='login-container'>


      

        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
          <div className='form-inside'>

         
          <h2>Create an account</h2>
          <input name="name" defaultValue={'v'} ref={register} placeholder='Name' />

          <input name="email" ref={register({ required: true, maxLength: 10 })} placeholder='Email' />
          {errors.email && <p>Email is required</p>}
          <input type='password' name="password" ref={register({ required: true, maxLength: 10 })} placeholder='Password' />
          {errors.password && <p>Password is required</p>}
          <input type='password' name="confirmpassword" ref={register({ required: true, maxLength: 10 })} placeholder='Confirm Password' />
          {errors.confirmpassword && <p>Password is required</p>}

          <input type="submit" value='Create an account'/>
          <p style={{ textAlign: 'center' }}>Already have an account? <span style={{ color: 'red' }}>login</span></p>
          </div>
        </form>











        <div className='google-signIn'>
          <p>----------------Or---------------</p>
          {
            user.isSignedIn && <div>
              <p>User Name: {user.name}</p>
              <p>Photo: <img src={user.photo} alt="" /></p>
              <p>Email: {user.email}</p>
            </div>

          }
          <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} style={{ marginRight: '2rem' }} /><span >Continue with Google</span></button>


        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;