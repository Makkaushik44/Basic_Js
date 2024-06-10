const marvelHeros=["thor","ironman","caption america","hulk"];
const dcheros=["flash","batman","aquman"]
// marvelHeros.push(dcheros);

// console.log(marvelHeros);

// const all_new_heros=marvelHeros.concat(dcheros); 

// console.log(all_new_heros);

// const all_new_heros=[...marvelHeros,...dcheros] //this call spread
// console.log(all_new_heros);

const another_array=[2,3,4,5,6,[3,4,5],5,[6,7,7,[6,4,3]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));