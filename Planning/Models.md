**MODELS**

C- Creating user profile<br/>
R- Breads looked at/Purchased<br/>
U- Adding things to Cart<br/>
D- Favorite Breads/Items in Cart<br/>


User {
  local :{
    email
    password
  },
Viewed: {

  ref: [Bread]
  }
}

Bread {

  name
  description
   path img
},


Cart: {

  },
  Purchased: {

    ref: "Cart"
  }

}



Routes
app.js
user.js
index.js

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
