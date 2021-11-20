let name1 = {
    firstname: 'swapnil',
    lastname: 'talpade'
}

let printName = function (city, age, country) {
    console.log(this.firstname + "-" + this.lastname + " from " + city + " of age " + age + " lives in " + country);
}

let printMyName = printName.bind(name1, 'mumbai')
printMyName("22", "india")


// now we'll create our own bind method
// we'll use function prototype to achieve similar effect

Function.prototype.mybind = function (...args) {
    let obj = this;

    //below slice will remove the first argument in this case name and return the rest
    // but because slice returns us the array we cant use .call method instead we'll use apply method
    params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name1, 'delhi');
printMyName2("26", "US");