var firebaseConfig = {
    apiKey: "AIzaSyDLum_AW_2jv-YzTyZ2o5DSs-6gxVbUlVo",
    authDomain: "sp2-records.firebaseapp.com",
    databaseURL: "https://sp2-records-default-rtdb.firebaseio.com",
    projectId: "sp2-records",
    storageBucket: "sp2-records.appspot.com",
    messagingSenderId: "879527889066",
    appId: "1:879527889066:web:e1b2e3f9682644b7f6a8d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
    var person = document.getElementById('person').value;
    var keyword = document.getElementById('keyword').value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
        
    }).catch(function (error){
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const auth = firebase.auth();


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('name'),
        person : getId('person'),
        keyword : getId('keyword')
    });
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}