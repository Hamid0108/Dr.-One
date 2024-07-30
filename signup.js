// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDmhNP8Sr8YW52XGKDDcqVoGKbDIjf8UrU",
    authDomain: "dr-one-414715.firebaseapp.com",
    projectId: "dr-one-414715",
    storageBucket: "dr-one-414715.appspot.com",
    messagingSenderId: "1:559323989443:web:e590dd95fbbcc04e086976",
    appId: "G-K23ZXKREC1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to the form and buttons
const signupForm = document.getElementById('signup-form');
const googleSignupButton = document.getElementById('google-signup');
const facebookSignupButton = document.getElementById('facebook-signup');

// Email/Password Sign Up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Sign Up Successful! Redirecting...');
            // Redirect or perform other actions
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Google Sign Up
googleSignupButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Sign Up Successful! Redirecting...');
            // Redirect or perform other actions
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Facebook Sign Up
facebookSignupButton.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Sign Up Successful! Redirecting...');
            // Redirect or perform other actions
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});