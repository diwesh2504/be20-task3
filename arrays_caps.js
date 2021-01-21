//Convert all strings to title caps in string array
//anonymous
let str_arr=["this is a book","hat","tap","javascript"];
let str_func=function(arr){
    let temp=[];
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i].toUpperCase());
    }
    return temp;
}
console.log("Original array:",str_arr)
console.log("Converted to Caps: ",str_func(str_arr));
let str_arr2=["cat","building","ceiling","suitcase"];
//iife
((arr)=>{
    let temp=[];
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i].toUpperCase());
    }
    console.log("Original array:",str_arr2);
    console.log("Converted to Caps :",temp);
})(str_arr2)