// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgkDkQECO0zI2JvngFdhLGtk_V_FgDHrU",
    authDomain: "test-85d31.firebaseapp.com",
    databaseURL: "https://test-85d31.firebaseio.com",
    projectId: "test-85d31",
    storageBucket: "test-85d31.appspot.com",
    messagingSenderId: "932764017381",
    appId: "1:932764017381:web:025a0b2e3d8ee0b4482a0c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  