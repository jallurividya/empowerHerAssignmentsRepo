if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);   // 20
//console.log(x); // ReferenceError: x is not defined


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user.details.email);   //test@mail.com
console.log(profile.user.details.phone);   //undefined


const user = {
  name: "Alice",
  profile: null
};

//console.log(user.profile.bio);  //TypeError: Cannot read properties of null (reading 'bio')

const user1 = {
  name: "Alice",
  profile: null
};

console.log(user1.profile?.bio);



