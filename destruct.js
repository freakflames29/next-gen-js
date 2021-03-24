// by array destructring we can assign array or obj value into a new variable
const arr=[1,2,3,4]
const [a,b]=arr
// console.log(a)
// console.log(b)

// to a object

const obj=
{
	name:"Sourav",
	title:"Das",
	hobby:"Coding"
}
const {name,title,hobby}=obj
console.log(`your name is ${name} ${title} and you love to do ${hobby}`)