//includes : The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const birds =  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilterIncludes (birds) {
    var geeses = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const newArray = []
    for( let bird of birds ){
        if ( !geeses.includes( bird)){
            newArray.push(bird)
        }
    }
    return newArray
};

console.log('gooseFilterIncludes',gooseFilterIncludes(birds))

//some : The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

function gooseFilterSome (birds) {
    var geeses = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const newArray = []
    for( let bird of birds ){
        if ( !geeses.some( geese => bird ==geese )){
            newArray.push(bird)
        }
    }
    return newArray
};

console.log('gooseFilterSome',gooseFilterSome(birds))

//concat : The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

function gooseFilterConcat (birds) {
    var geeses = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArray = []
    for( let bird of birds ){
        if ( !geeses.some( geese => bird ==geese )){
            newArray = newArray.concat([bird])
        }
    }
    return newArray
};

console.log('gooseFilterConcat',gooseFilterConcat(birds))

// flat and modify Matrix

const matrix = [
    [1,2,3,4,5,12],
    [6,7,8,9,10,23],
    [11,12,13,14,15,23],
    [16,17,18,19,20,23],
    [20,22,23,24,25,23]
]

const modifyMatrix = (matrix) =>{
    const flattenedM = matrix.flat()
    console.log(flattenedM)
    const resultArr = []
    for(let i in flattenedM){
        if(i%5==0){
            resultArr.push([])
        }
        resultArr[Math.floor(i/5)].push(flattenedM[i])
    }
    return resultArr
}

console.log(modifyMatrix(matrix))
