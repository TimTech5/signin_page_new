
let form = document.getElementById("form");
form.addEventListener("submit", async function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;



try{
  const response = await fetch("https://dummyjson.com/auth/login", {
     method: "POST",
    headers: { 
        "Content-Type": "application/json" },
    body: JSON.stringify({
      
      username: username,
      password: password,
      expiresInMins: 30, 
    })

});
const data = await response.json();
if(data.message == "Invalid Credentials"){
    document.getElementById("error").innerHTML = `Error:${data.message}`;
} else{
localStorage.setItem("firstName", data.firstName);
localStorage.setItem("lastName", data.lastName);
localStorage.setItem("token", data.token);
window.location.href = "home.html";
}



} catch(err){
console.log("error");
}

})