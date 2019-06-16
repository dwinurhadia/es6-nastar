//var nama = 'Dwi Nurhadi'; //merupakan function scope

// let dan const merupakan blockscope

// var nama = 'dwinurhadi';
// var nama = 'indonesia';

// let nama = 'dwi';
// {
// let nama = 'dnurhadas';
// console.log(nama);
// }
// console.log(nama);

// function getName() {
//     if (true) {
//         var nama = "adadsa";
//         console.log(nama);
//     } else {
//         console.log(nama);
//     }
// }

// getName();

//tidak bisa direassign
// const person = {
//     id: 2,
//     name: "joko"
// };
// person = {
//     id: 1,
//     name: 'hilman'
// };
// person.age = 34;

// console.log(person);


//syntax arrow --> function shorthand

//aslinya seperti ini
// var members = ['dodi','gita','siaka'];
// members.forEach(function(member){
//     console.log(member);                                    
// })

//kemudian jadi seperti ini
var members = ['dodi','gita','siaka'];
members.forEach((member) => {
    console.log(member);                                    
})