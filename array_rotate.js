//Rotate an array k times.
//anonymous
var arrayRotate=function(a)
{
	let k=prompt("Enter the value of K");
	 
	for(let i=1;i<=k;i++)
	{
		let temp=a.pop();
		a.unshift(temp);
         }
    console.log("Array:",a)
    console.log("After Rotation"+a);
}
arr=[1,2,3,4,5];
arrayRotate(arr);
arr2=[4,5,6,7,8];
//iife
((a)=>{
    let k=prompt("Enter the value of K");
	 
	for(let i=1;i<=k;i++)
	{
		let temp=a.pop();
		a.unshift(temp);
         }
    console.log("Array:",a)
    console.log("After Rotation"+a);
})(arr2)