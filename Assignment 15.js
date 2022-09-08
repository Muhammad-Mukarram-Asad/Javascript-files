      var name_input = document.getElementById("name");
      var profile_input = document.getElementById("profile_url");
      var email_input = document.getElementById("email_id");
      var password_input = document.getElementById("password_id");

      var button = document.getElementById("button_signUp");

     


      // Create an array for storing the user data.
      var Users = [];

      // creting an object and store the above values into it.

      var data;
      button.addEventListener("click", function (event) {
        data = {
          name: name_input.value,
          profile: profile_input.value,
          email: email_input.value,
          password: password_input.value,
          friends: [],
        };

        Users.push(data);
        console.log(Users);
        event.preventDefault(); // This is very important. It prevents the form to reloaded.


        // if(name_input.value == "" || email_input.value == "" || password_input.value == "")
        // {
        //     alert("What are you doing man. Plz fill the registeration form first \n" +
        //     " then you are allowed to login.")
        //     loginContainer.style.display = "none";
        //     signupContainer.style.display = "block";
            
        

        // localStorage.setItem("dataKey", JSON.stringify(data));
        // window.localStorage.getItem("dataKey");
      });

      const car = 
      {
        name: "Corolla",
        brand: "Toyota",
        color:"Blue",
        price:1050000,
        model: 2007
      };


      // Setting the car object in localstorage.
    window.localStorage.setItem('car',JSON.stringify(car));

    // Retrieving the car object data.
    window.localStorage.getItem('car');

    JSON.parse(window.localStorage.getItem('car'));
     
    
    // localStorage.setItem('users_array',JSON.stringify(Users) );
    // window.localStorage.getItem('users_array');


     function displayLogin() {
        var loginContainer = document.getElementById("loginContainer");
      var signupContainer = document.getElementById("signUpContainer");
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
      }


      function displaySignUp() {
        var loginContainer = document.getElementById("loginContainer");
      var signupContainer = document.getElementById("signUpContainer");
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
      }

      function checkingCredentails() {
        console.log(" The array of users is given below:\n");
        console.log(Users);

        var loginEmail = document.getElementById("email_loginId");
        var loginPassword = document.getElementById("psw_loginId");
        var friend_container = document.getElementById("friendContainer");

        for (var i = 0; i < Users.length; i++) {
          if (
            Users[i].email == loginEmail.value &&
            Users[i].password == loginPassword.value
          ) {
            friend_container.style.display = "block";
            loginContainer.style.display = "none";
            friendScreen();
            
          } else {
            alert("Sorry in-valid credentials");
          }
        }
      }

      var p = document.getElementById("friendNames_text");
      
     
      function friendScreen() {
        var h1 = document.getElementById("friend_heading");
        var h2 = document.getElementById("ymk");
        h1.innerText = "Welcome to " + data.name + " friends screen.";
        h2.innerText = "You May know them " + data.name + " .";
      }
     

      function addFriend() {
        var userName = prompt(" Enter the user name:");
        var friendName = prompt(" Enter the friend name:");

        for (var i = 0; i < Users.length; i++) {
          if (userName == Users[i].name) {
            Users[i].friends.push(friendName);
          }
          var res = Users[i].friends;  
          p.innerHTML = res;
        }
      }

      function removeFriend() {
        var userName = prompt(" Enter the user name:");
        var friendName = prompt(" Enter the friend name:");

        for (var i = 0; i < Users.length; i++) 
        {
          if (userName == Users[i].name)
           {
              var friend_index = Users[i].friends.indexOf(friendName); // finding the index of the friend
              console.log(friend_index);
              Users[i].friends.splice(friend_index, 1);
              console.log(Users[i].friends);

            }
        
           else 
           {
            alert("there is no user with the given name.");
           }
           
          var res = Users[i].friends;
          p.innerHTML = res;
        }
      }

      function addthese(event) {
        var m = event.target;
        // var name_text = document.getElementById("label_text").innerHTML;

        var ans = m.parentElement.children[0].innerHTML;
        // console.log(m);

        console.log(" Answer value --> " + ans);
        var n = data.name;
        for (var i = 0; i < Users.length; i++) {
          if (n == Users[i].name) {
            Users[i].friends.push(ans);
          }
          var res = Users[i].friends;
          p.innerHTML = res;
        }
      }

      function removethese(event) {
        var m = event.target;

        var ans = m.parentElement.children[0].innerHTML;

        console.log(" Answer value --> " + ans);
        var n = data.name;
        for (var i = 0; i < Users.length; i++) {
          if (n == Users[i].name) {
            Users[i].friends.splice(ans,1);
          }
          var res = Users[i].friends;
          p.innerHTML = res;
        }
      }
