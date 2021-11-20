let name1 = {
    firstname: 'swapnil',
    lastname: 'talpade',

}
let printFullName = function (city, state) {
    console.log(this.firstname + " " + this.lastname + "from " + city + "," + state)
}


// call first parameter is always the this keyword where the function is pointing
printFullName.call(name1, 'kalyan', 'maharashtra');

let name2 = {
    firstname: 'harshal',
    lastname: 'pawaskar',
}

printFullName.call(name2, 'mumbai', 'delhi');
console.log(`below is apply method`)
printFullName.apply(name2, ['mumbai', 'delhi'])

// only diff between call and apply is in apply we can pass in the list of argument instead of inividual arguments

// bind: bind is used to keep a copy of method/function and use it later as we need
let printMyName = printFullName.bind(name2, 'mumbai', 'delhi');
console.log(printMyName) //returns the entire function
printMyName()  //return the output
