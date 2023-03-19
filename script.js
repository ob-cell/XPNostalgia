// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARmPy0GOPK3n1pGm9HNt0HgMb7dB_VoyI",
  authDomain: "chat-xpnostalgia.firebaseapp.com",
  projectId: "chat-xpnostalgia",
  storageBucket: "chat-xpnostalgia.appspot.com",
  messagingSenderId: "867195687224",
  appId: "1:867195687224:web:06dddd443fedcc7c8cb1cd",
  measurementId: "G-W9636LJ2PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

firebase.initializeApp(firebaseConfig); 
db = firebase.database();
 // get user's dataconst 
var username = prompt("Please Tell Us Your Name"); 
// submit form
// listen for submit event on the form and call the postChat 
document.getElementById("message-form").addEventListener("submit", sendMessage); 
sendMessage(e) { e.preventDefault(); // get values to be submitted const timestamp = Date.now();
 const messageInput = document.getElementById("message-input"); const message = messageInput.value; 
// clear the input box 
messageInput.value = ""; //auto scroll to bottom document .getElementById("messages") .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); 
// create db collection and send in the data 
db.ref("messages/" + timestamp).set({ username, message, });} // display the messages// reference the collection created earlierconst fetchChat = db.ref("messages/"); // check for new messages using the onChildAdded event listenerfetchChat.on("child_added", function (snapshot) { const messages = snapshot.val(); const message = `<li class=${ username === messages.username ? "sent" : "receive" }><span>${messages.username}: </span>${messages.message}</li>`; // append the message on the page document.getElementById("messages").innerHTML += message;});




