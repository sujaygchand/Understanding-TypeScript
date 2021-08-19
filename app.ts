const person: {
    name : string;
    age: number;
    hobbies : string[];
    role: [number, string];
} = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming", "Cooking", "Coding"],
    role: [3, "Admin"]
}

/*
const person  = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming"]
};
*/

console.log(`${person.name} is ${person.age} years old with role of ${person.role[1]} with value of ${person.role[0]}`);

for (const hobby of person.hobbies) 
{
    console.log(hobby.toLowerCase());
}
