
console.log('This is a string');

console.log(123456);

console.log(false);

console.log(['s1', 's2']);

console.log({a: "a1", b: "b1"});

let poraka; //declaration for a variable
poraka = "Hi";
console.log(poraka);

let ime = "Mil", prezime = "Jan", godini = 100;

function aa(){
    var a = "a";
    return a;
}

function bb(){
    let b = "b";
    return b;
}

aa();
bb();

// console.log(a);
// console.log(b);

//3 tipa navodnice
//edinechni, dvojni, backticks

let zbir = 11;
console.log(`Rezultatot e ${zbir}`);

//conversion check type
console.log(typeof undefined);
console.log(typeof 230);
console.log(typeof 12n); //bigint
console.log(typeof false);
console.log(typeof "undefined");
console.log(typeof null);
console.log(console.log);

let num = "4";
console.log(num);
console.log(Number(num));

let valueStr = true;
console.log(typeof valueStr);
valueStr = String(valueStr);
console.log(valueStr);
console.log(typeof valueStr);

console.log("6"+"2");

let strnum = "123";
console.log(typeof strnum);
let numb = Number(strnum);
console.log(typeof num);

//IMP there is NaN - not a number
let aga = Number("dsfff");
console.log(aga); //NaN

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("1"));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));

//a + b = c; "+"ot moze da e unaren i binaren operator
console.log("my"+"string");
console.log("1"+2);
console.log(2+"1");
console.log(2+2+"1"); //41
console.log("1"+2+2); // 122

console.log(6 - "2");
console.log("6" / 2);

let xnum = 1;
console.log(+xnum);

console.log(+true); //unaren + e kratenka za Number() IMPORTANT
console.log(+"");

console.log(2 > 1);
console.log(2 == 1); // == -> ===
console.log(2 != 1);

//logical operands
// ||
// &&
// !
// ??
console.log('LOGICAL');
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let godina = 2002;

if(godina < 2022){
    console.log("rano");
}else if(godina > 2022){
    console.log("docna");
}else{
    console.log("tochno");
}

let a = 4;
switch (a) {
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 4:
        console.log(4);
        break    
    default:
        console.log('not found');
        break;
}

// while
// for
// do while
for (let index = 0; index < 3; index++) {
    console.log(index);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

console.log('START');
for (let k = 0; k < 10; k++) {
    console.log("K: " +k);
    if(k == 6){
        break;
    }
    console.log('after');
    if(k % 2 == 0){
        console.log(k);
    }

}

let o1 = new Object();
let o2 = {};

const student = {
    ime: "Mil",
    prezime: "Jan"
};

function Student(ime, prezime){
    this.name = ime;
    this.prezime = prezime;
}

let trajko = new Student("trajko", "trakovski");
console.log(trajko);

let petko = new Student("petko", "petkovski");
console.log(petko);

let rajko = petko; //sega rajko kje pokazuva kon petko
console.log(rajko);

rajko.name = "rah";
console.log(petko);  //!!!!!! they are being copied by ref, instead of primitive types which are by value



