
let body = document.querySelector("body")
console.log(body)

function submitData (name, email) {

   let addingUserData =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    body: JSON.stringify({
        "name":name,
        "email": email,
    })
    }

    return fetch('http://localhost:3000/users', addingUserData) 
    .then(response => response.json())
    .then(newUsers => {
        body.append(newUsers.id)
    })
    .catch(function(error){
        body.append(error.message)
})
}

