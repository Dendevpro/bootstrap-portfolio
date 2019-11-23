// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtEDv6QP1JKPEFp-YDxfP7-E6Qj8a88dc",
    authDomain: "contact-form-e58fd.firebaseapp.com",
    databaseURL: "https://contact-form-e58fd.firebaseio.com",
    projectId: "contact-form-e58fd",
    storageBucket: "contact-form-e58fd.appspot.com",
    messagingSenderId: "323329266222",
    appId: "1:323329266222:web:309fc8517686909d8845bf",
    measurementId: "G-X7GRHQP9JR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference Messages Collection
var messagesRef = firebase.database().ref('messages');

// Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Function Submit Form
function submitForm(e) {
    e.preventDefault();

    // GET Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name);
    // Save message  
    saveMessage(name, email, phone, message);
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Function to save message to Firebase DB
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}