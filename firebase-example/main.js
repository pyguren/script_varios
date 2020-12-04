// Your web app's Firebase configuration
var firebaseConfig = {
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var persona = {
    nombre: "pepe",
    apellido: "martinez"
}

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider);

//firebase.auth().createUserWithEmailAndPassword("grilluelo@gmail.com","pepegrillo");

firebase.auth().signInWithEmailAndPassword("grilluelo@gmail.com","pepegrillo");

firebase.database().ref("/personas").push(persona);

firebase.auth().onAuthStateChanged(checkUser);

function checkUser(user){
    if(user != null){
        console.log("logged");
    }else{
        console.log("not logged");
    }
}

firebase.database().ref("/personas").on('child_added',readMessage);

function readMessage(childSnapshot){
    console.log(childSnapshot.val())
}