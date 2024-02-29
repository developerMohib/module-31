

// double it 
const arrayNum_1 = [32,23,42,44,43];
const newArrayNum_1 = [];
for (const num of arrayNum_1) {
    // console.log( num );
    const newNum = num * 2;
    newArrayNum_1.push(newNum);
}
// console.log('New array :', newArrayNum_1);

// simple map function

function functionCalling(arrayNum_1){
    
    const newArrayNum_1 = [];
    for (const num of arrayNum_1) {
        // console.log( num );
        const newNum = num * 2;
        newArrayNum_1.push(newNum);
    }
    return newArrayNum_1;
}
const myNewArray_1 = functionCalling(arrayNum_1);
console.log(myNewArray_1)
// arrow function 

// const arrayNum_2 = () => {}