// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqH0SGtaYryrAbeJ5gNQPQqLeaMIB6ie0",
  authDomain: "theultimatechatbox.firebaseapp.com",
  databaseURL: "https://theultimatechatbox-default-rtdb.firebaseio.com",
  projectId: "theultimatechatbox",
  storageBucket: "theultimatechatbox.appspot.com",
  messagingSenderId: "862436901788",
  appId: "1:862436901788:web:33b0a1e352a8d68aecbe59",
  measurementId: "G-MKPKW85DL3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

firebase.initializeApp(firebaseConfig); 
// initialize databaseconst db = firebase.database();
 // get user's dataconst username = prompt("Please Tell Us Your Name"); 
// submit form// listen for submit event on the form and call the postChat functiondocument.getElementById("message-form").addEventListener("submit", sendMessage); 
// send message to dbfunction sendMessage(e) { e.preventDefault(); // get values to be submitted const timestamp = Date.now();
 const messageInput = document.getElementById("message-input"); const message = messageInput.value; 
// clear the input box messageInput.value = ""; //auto scroll to bottom document .getElementById("messages") .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); 
// create db collection and send in the data db.ref("messages/" + timestamp).set({ username, message, });} // display the messages// reference the collection created earlierconst fetchChat = db.ref("messages/"); // check for new messages using the onChildAdded event listenerfetchChat.on("child_added", function (snapshot) { const messages = snapshot.val(); const message = `<li class=${ username === messages.username ? "sent" : "receive" }><span>${messages.username}: </span>${messages.message}</li>`; // append the message on the page document.getElementById("messages").innerHTML += message;});




