

const numberReduce = [43,42,21,53,64,66];
const resultNumberReduce = numberReduce.reduce( (prviouse, current) => prviouse + current, 0 );
document.write('<br> reduce :', resultNumberReduce);