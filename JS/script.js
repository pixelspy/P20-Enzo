const TABLE = document.getElementById('table');
// constante est une variable fixe
document.getElementById('send').addEventListener('click', function(){
let a = document.getElementById('firstName').value;
let b = document.getElementById('lastName').value;
let c = document.getElementById('age').value;
// people.push({ id : people.length+1, firstName : a, lastName: b, age : c});
// console.log(people);

TABLE.innerHTML += "<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</tr><td>";

});

// let people = [
//   {
//     id : 1,
//     firstName : 'Mahana',
//     lastName : 'd.',
//     age : 30
//   },{
//     id : 2,
//     firstName : 'Axel',
//     lastName : 'Bleu',
//     age : 40
//   }
//
// ];

// people.forEach(function(item){
//   TABLE.innerHTML += "<tr><td>" + item.firstName + "</td><td>" + item.lastName + "</td><td>" + item.age + "</tr><td>";
//
//   console.log(item.firstName);
// })
// for (var i = 0; i < people.length; i++) {
// let item = people[i];
//
// TABLE.innerHTML += "<tr><td>" + item.firstName + "</td><td>" + item.lastName + "</td><td>" + item.age + "</tr><td>";
// console.log(people[i]);
// }
// i = c'est l'index du tableau

// style Json, utilisé pour les appli
// objets dans des objets
