console.time('a')

const numbers = [10,101,0,3,34,343,112,999,0,101,344,9,100,1000,98,989,78,77,777,76,1000,4,0,0,0,1,0,0,3,55,0,6,4,2,4,75,67,546,346,34,63,99,1,34,633,100,10,111,0,12]

numbers.sort((a,b) => {
    return [b,a].join('') - [a,b].join('')
})

console.log(numbers)
console.log(numbers.join(''))

console.timeEnd('a')
