let nestedArray = [1, 2, [3, 4, 5, [6, 7, 8]]];
// result should be [1,2,3,4,5,6,7,8]

const flatArray = (arr) => {
    // if item is array
    // if item is element
    let res = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flatArray(item));
        } else {
            // acc.push(item)
            acc = [...acc, item]
        }
        return acc;
    }, [])

    return res;
}

console.log(flatArray(nestedArray))