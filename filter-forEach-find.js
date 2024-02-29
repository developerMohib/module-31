
// forEach 

const numberForEach = [32,43,22,34,42,55,65,43,41];
// forEach return    return kore na kicu
const resultForEach = numberForEach.forEach( n => console.log(n) );



// filter method

const resultFilterUper = numberForEach.filter( p => p > 40);
console.log(resultFilterUper, 'result of filtering');

const resultFilterOdd = numberForEach.filter( p => p % 2 === 1);
console.log(resultFilterOdd, 'result of filtering');
document.write( '<br>', resultFilterOdd, ' result of filtering');

const frndsFilterName = ['shakib', 'tamim', 'mohib', 'tomy', 'jerry'];
const oddResultFilterName = frndsFilterName.filter( frnds => frnds.length % 2 === 1 );
console.log(oddResultFilterName, 'odd name');
document.write( '<br>', oddResultFilterName, ' odd name');

const evenResultFilterName = frndsFilterName.filter( frnds => frnds.length % 2 !== 1 );
console.log(evenResultFilterName , 'even Name');
document.write( '<br>', evenResultFilterName , ' even Name');