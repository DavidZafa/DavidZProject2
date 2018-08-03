**MODELS**

C- Creating user profile<br/>
R- Breads looked at/Purchased<br/>
U- Adding Players To Team<br/>
D-Remove Players<br/>

User Model {
  Name,
  Email,
  Password
}

Basketball Model {
  image
  Name
  position
  team
  number
  ppg
}

Team Model {
  Team
  Points
}

^^^ This model is for when I eventually figure out how to add fantasy points and such



Routes
applicaton.js
team.js
user.js
basketball.js

module.exports {

  show:
  user.findOne
  populatePath: "Viewed"
  populatePath: "Purchased"
},

login: {
    createLogin
},

signUp{


  createSignup{

  },
}
logout{

}
}
