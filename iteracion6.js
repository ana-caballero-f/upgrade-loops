//TERMINADO
const toys= [
    {id: 40, name: "El gato felix"},
    {id: 5, name: "Buzz Year"},
    {id: 11, name: "Action mann"},
    {id: 40, name: "El gato con guantes"},
    {id: 23, name: "Barbie mann"}  
]

for(let i=toys.length-1; i>=0; i--){
    if(toys[i].name.includes("gato")){
        toys.splice(i,1);
    }
}
console.log(toys);


