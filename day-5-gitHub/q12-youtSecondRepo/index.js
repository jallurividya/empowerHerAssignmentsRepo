
function signup(userName){
    let usernames = ["vidya", "sharan", "usha", "srinu"];
    if(usernames.includes(userName)){
        return "User Already Registered, Please Login";
    }
    else{
        return "Signup Successful, Please Login";
    }
}
console.log(signup("mounika"));
console.log(signup("vidya"));

// login code
function login(userName, password){
let usernames=["vidya", "mounika", "srinu", "usha"];
if(usernames.includes(userName) && password=="Emp@123"){
    return "Login Sucessfull..."
}
else if(usernames.includes(userName) && password!="Emp@123"){
    return "Wrong Password...."
}
else{
    return "User Not Found, Please Signup"
}
}
console.log(login("vidya", "Emp@123"))
console.log(login("srinu"))
console.log(login("sharan"))
console.log(login("sharan", "Emp@123"))


