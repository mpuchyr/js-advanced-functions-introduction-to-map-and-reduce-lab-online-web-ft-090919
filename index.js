// Your code here
function mapToNegativize (arr) {
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * -1)
    })
    return newArr
}

function mapToNoChange (arr) {
    return arr
}

function mapToDouble (arr) {
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * 2)
    })
    return newArr
}

function mapToSquare (arr) {
    let newArr = []
    arr.forEach((num) => {
        newArr.push(num * num)
    })
    return newArr
}

function reduceToTotal (arr, startingPoint = 0) {
    let total = startingPoint
    arr.forEach((num) => {
        total += num
    })
    return total
}

function reduceToAllTrue (arr) {
   let allTrue = true
   arr.forEach((item) => {
       if (!item){
        allTrue = false
       }
   })
   return allTrue
}

function reduceToAnyTrue (arr) {
    let anyTrue = false
    arr.forEach((item) => {
        if (item) {
            anyTrue = true
        }
    })
    return anyTrue
}