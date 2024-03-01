
const products = [
    {name : 'Dell', id: 1 , price : 40000, color : 'black'},
    {name : 'hp', id : 2 , price : 44000, color : 'black'},
    {name : 'lenevo', id : 3 , price : 45000, color : 'black'},
    {name : 'walton', id : 4 , price : 43000, color : 'black'},
    {name : 'mac', id : 5 , price : 42000, color : 'black'},
    {name : 'macV', id : 6 , price : 29000, color : 'black'}
]

// map 

const productsMap = products.map( pd => pd.name);
console.log(productsMap);
document.write('<br> product name array : ', productsMap);


// forEach 

const productsForEach = products.forEach( pd => console.log(' products for each :', pd.id));


// filter method 

const productsFilter = products.filter( pd => pd.price > 40000);
const productsFilterArray = productsFilter.map( parameter => parameter.price)
console.log(' product filter : ', productsFilterArray);



// bid word filter 
const bigWordArray = [ 'big', 'tig', 'small', 'tall',];
const bigWordFilter = bigWordArray.filter(big => big === 'big');
console.log(bigWordFilter);


// reduce method 

const productsReduce = products.reduce( (acum, initial) => acum + initial.price, 0);
console.log(productsReduce , 'Reduce');
