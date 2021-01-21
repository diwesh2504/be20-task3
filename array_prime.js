//Print the prime numbers in an array
//anonymous
let arr=[1,3,7,8,11,19,22,23]
let prime=function(a){
    let temp=[];
    a.forEach((num)=>{
        let c=0;
        for(let i=2;i<=num/2;i++){
            if(num%i==0)
                c++;
        
        }
        if(c==0 && num!=1)
            temp.push(num);
    })
    return temp;
}
console.log("Array",arr);
console.log("Prime numbers:",prime(arr));

//iife
let arr2=[4,8,7,11,13,56,72];
((a)=>{
    let temp=[];
    a.forEach((num)=>{
        let c=0;
        for(let i=2;i<=num/2;i++){
            if(num%i==0)
                c++;
        }
        if(c==0 && num!=1)
            temp.push(num);
    })
    console.log("Array",a);
    console.log("Prime numbers:",temp);
})(arr2)
