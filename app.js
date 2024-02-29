

// double it 
const arrayNum_1 = [32,23,42,44,43];
const newArrayNum_1 = [];
for (const num of arrayNum_1) {
    console.log( num );
    const newNum = num * 2;
    newArrayNum_1.push(newNum);
}
console.log('New array :', newArrayNum_1);
document.write('<br> New array :', newArrayNum_1);

// simple map function

function functionCalling(arrayNum_1){
    
    const newArrayNum_1 = [];
    for (const num of arrayNum_1) {
        const newNum = num * 2;
        newArrayNum_1.push(newNum);
    }
    return newArrayNum_1;
}
const myNewArray_1 = functionCalling(arrayNum_1);
console.log(myNewArray_1);
document.write('<br> function call array :', myNewArray_1);


// arrow function 

const exampleSet = (a,b) => (a*b);
console.log('example :', exampleSet(3,2));


/* --------------------------------------------------*/


const myNewArray_2 = [3,5,6,7,8,9,];

function doubleIt (numb){
    let number = numb * 2 ;
    return number ;
}
const result = myNewArray_2.map(doubleIt);

console.log('result :', result);


/* --------------------------------------------------*/

// arrow function 
const doubleIt_2 = (num) => (num * 2);
const result_2 = myNewArray_2.map(doubleIt_2);

console.log('result 2 :', result_2);

// advance level 

const doubleIt_3 = (num) => (num * 2);
const result_3 = myNewArray_1.map(doubleIt_3);
console.log('result 3 :', result_3);

/* --------------------------------------------------*/

// Friends Name Length 

const myFriends = ['shakib', 'tamim', 'musfiq', 'masrafi', 'reyad'];
function nameLength(allName) {
    for (const name of allName) {
        const Length = name.length;
        // console.log('name :', name, 'and length :', length);
    }
    return length;
}
const nameFuntion = nameLength(myFriends);
console.log('name length :', nameFuntion);