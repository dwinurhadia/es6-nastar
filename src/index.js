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

function getName() {
    if (true) {
        var nama = "adadsa";
        console.log(nama);
    } else {
        console.log(nama);
    }
}

getName();