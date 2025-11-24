let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const res = arr.reduce((acc,ele)=>{
    if(acc[ele])
        acc[ele]++;
    else
        acc[ele]=1
    return acc;
},{})
console.log(res);

