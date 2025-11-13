
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

