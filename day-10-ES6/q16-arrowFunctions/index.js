const isEven=(n)=>{
    if(n%2==0)
        return true;
    else
        return false;
}
console.log(isEven(7));


let marks=45;
const result = marks>35 ? 'pass' : 'fail';
console.log(result);


const greet = (name)=>{
    return name ? `Hello, ${name}` : "Guest";
};
console.log(greet("vidya"));
console.log(greet());
