//Remove duplicates from an array.
//anonymous
let arr=[1,8,2,3,4,5,6,6,7,6,3,5,5,5,1,1,1,1];
let dup=function(a){
    let check=[];
    for(let i of arr){
        
        if(check.indexOf(i)===-1){
            check.push(i);
        }
        
            

    }
    return check;
}

console.log("Original array",arr);
console.log("Array after removing duplicates",dup(arr));
//iife
((a)=>{
    let check=[];
    for(let i=0;i<a.length;i++){
        if(check.indexOf(a[i])===-1){
            check.push(a[i]);
            
        }

    }
    console.log("Original array",a)
    console.log("After removing duplicates",check);
 })(arr)