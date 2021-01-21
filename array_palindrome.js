//Print the palindrome numbers in an array
let arr=[121,123,212,111,987,265,222];
//anonymous
let prime=function(a){
    let temp=[];
    a.forEach((num)=>{
        let k=num,r=0,rev=0;
        while(k>0){
            r=k%10;
            rev=rev*10+r;
            k=Math.trunc(k/10);
        }
        if(rev==num)
            temp.push(num);
        
    })
    return temp;
}
console.log("Original array:",arr);
console.log("Palindrome numbers:",prime(arr));

//iife
let arr2=[323,454,554,567,444]
((a)=>{
    let temp=[];
    console.log("Original array:",a);
    a.forEach((num)=>{
        let k=num,r=0,rev=0;
        while(k>0){
            r=k%10;
            rev=rev*10+r;
            k=Math.trunc(k/10);
        }
        if(rev==num)
            temp.push(num);
        
    })
    console.log("Palindrome numbers:",temp);
})(arr2)