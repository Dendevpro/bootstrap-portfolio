// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOUugCqkNnpQi-M_567i7uNNftERn7rKQ",
    authDomain: "contact-form-2a5f4.firebaseapp.com",
    databaseURL: "https://contact-form-2a5f4.firebaseio.com",
    projectId: "contact-form-2a5f4",
    storageBucket: "contact-form-2a5f4.appspot.com",
    messagingSenderId: "419350100146",
    appId: "1:419350100146:web:3d9a3bc2b98d4dcddcf1ab",
    measurementId: "G-NXLYDDWT3W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference Messages Collection
var messagesRef = firebase.database().ref('messages');

// Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Function Submit Form
function submitForm(e) {
    e.preventDefault();

    // GET Values
    var name = getInputVal('name');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message  
    saveMessage(name, lastname, email, phone, message);

}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Function to save message to Firebase DB
function saveMessage(name, lastname, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
    });
}