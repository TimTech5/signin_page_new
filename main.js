document.addEventListener("DOMContentLoaded", function(){


    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");


   const first = document.getElementById("first-name");
   const last = document.getElementById("last-name");


   
   first.innerHTML = `${firstName}`;
   last.innerHTML = `${lastName}`;
})


const logOutBtn = document.getElementById("logout");
logOutBtn.addEventListener("click", function(){
    window.location.href = "index.html";
})







































/*fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then(console.log);


/*
  {
    "id": 1,
    "username": "emilys",
    "email": "emily.johnson@x.dummyjson.com",
    "firstName": "Emily",
    "lastName": "Johnson",
    "gender": "female",
    "image": "https://dummyjson.com/icon/emilys/128"
    ... // other user fields
  }

  */