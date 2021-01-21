//Sum of an array
//a.Anonymous
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=function(a){
    let s=0;
    a.forEach(i=>{s+=i;});
    return s;
}
console.log("Original array",arr);
console.log("Sum(using anonymous):",sum(arr));
//b.iife
((a)=>{
    let s=0;
    a.forEach(i=>s+=i);
    console.log("Sum(using iife):",s);
})(arr)
