<script>
document.getElementById("loginForm").addEventListener("submit", (event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    location.replace("welcome.html")
  }else{
    // no user exist
  }
})

function login(){
  const email =document.getElementById("email").value
 
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error)=>{
    document.getElementById('error').innerHTML =error.message

  })
}
function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementaryById("password").value
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
    .catch(error) =>{
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebaseConfig.auth().sendPasswordResetEmail(email)
    .then(( => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
           