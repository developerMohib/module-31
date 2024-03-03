
class person{
    constructor(name, height, proffession){
        this.perseonName = name;
        this.personHeight = height;
        this.personProffession = proffession;
    } 
    // optional 
    
    present() {
        return 'I have a ' + this.perseonName;
      }
}

const mohib = new person ('Mohib', '75 inch', 'Study' );
console.log(mohib);

class teacher extends person {
    constructor(name, height, proffession, favoriteClass){
        super(name, height, proffession);
        this.favoriteSubject = favoriteClass;
    }
    present() {
        return 'I have a ' + this.perseonName;
      }
}
const shakib = new teacher ('shakib', '75 inch', 'Study', 'math');
console.log(shakib);