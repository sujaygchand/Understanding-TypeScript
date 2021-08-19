/*const person: {
    name : string;
    age: number;
    hobbies : string[];
} = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming"]
}*/

const person  = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming"]
};

console.log(`${person.name} is ${person.age} years old`);

for (const hobby of person.hobbies) 
{
    console.log(hobby.toUpperCase());
}
