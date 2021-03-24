//classes in js
class Person
{
	constructor()
	{
		this.gender="Male"
	}
	printGender()
	{
		console.log(this.gender)
	}
}

class Human extends Person

{
    constructor()
    {
    	super();
        this.name="sourav"
    }
    printName()
    {
        console.log(this.name);
    }
}

const ob=new Human
ob.printName()
ob.printGender()

// console.log(ob.name+"ddd");