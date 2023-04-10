// Data from AJAX

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e) {
    e.preventDefault();
    
    //Making http named constant with HTTP Request
    const http = new XMLHttpRequest();

    //Getting Users.json connected
    http.open("GET", "users.json", true);

    //Specify what we want actually
    http.onload = function() {
        if(this.status === 200) {
            //console.log(this.responseText);

           //getting data from JSON File
            const users = JSON.parse(this.responseText);

            let output = "";

            users.forEach(function(user)
            {
                output +=
                `
                <hr>
                <ul>
                    <li>ID : ${user.id}</li>
                    <li>Name : ${user.name}</li>
                    <li>Age : ${user.age}</li>
                    <li>Email : ${user.email}</li>
                </ul>
                `;
            }
            )

           document.getElementById("users").innerHTML = output;
           
        }
    }


    http.send();
}