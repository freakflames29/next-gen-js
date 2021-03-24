// spread operator is used by ... this operator

arr=[1,2,3,4]
newArr=[...arr,5,6] // here we can use ... and the name of the arr to implement the array in a new array
// console.log(newArr)

// rest operator is used to take a lot of argument to a function
function aa(...args) // it takes the number and convert that into an array
{
	args.forEach((ele,index)=>
	{
		console.log(ele+"-> "+index)
	})
}
aa(6,1,2,6,4,2,3)