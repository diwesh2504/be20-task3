//Print Odd Numbers in an Array
//a.Anonymous
let arr=[1,2,3,4,5,6,7,8,9,10];
let odd=function(a){
    let temp=[];
    for(let i=0;i<a.length;i++){
        if(arr[i]%2!=0)
            temp.push(arr[i]);
        
    }
    return temp;
}
console.log("Original array",arr)
console.log("Odd numbers in the array:",odd(arr));
//iife
(()=>{
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let temp=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0)
            temp.push(arr[i]);

    }
    console.log("Odd numbers in the array:",temp);
})()