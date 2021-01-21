//Print the median of sorted arrays.
//anonymous
let arr1=[1,2,3,4,7,8];
let arr2=[4,5,9,10,11,12];
let median=function(a,b){
    console.log("array1:",a);
    console.log("array2:",b);
    let s=a.concat(b).sort((c,d)=>c-d),med=0;
    console.log("After joining:",s);
    if(s.length%2==0)
        med=(s[(s.length/2)-1]+s[s.length/2])/2;
    else
        med=s[Math.trunc(s.length/2)];
    
    return med;
}
console.log("Median:",median(arr1,arr2));

//iife
let arr3=[1,2,4,6,7],arr4=[9,14,34,54,81];
((a,b)=>{
    let s=a.concat(b).sort((c,d)=>c-d),med=0;
    console.log("array3:",a);
    console.log("array4:",b);
    console.log("After joining:",s);
    if(s.length%2==0)
        med=(s[(s.length/2)-1]+s[s.length/2])/2;
    else
        med=s[Math.trunc(s.length/2)];
    console.log("Median:",med);
})(arr3,arr4)
