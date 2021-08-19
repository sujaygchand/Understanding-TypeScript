enum Role {Reader, Commenter, Editor};

const person: {
    name : string;
    age: number;
    hobbies : string[];
    role: [Role, boolean];
} = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming", "Cooking", "Coding"],
    role: [Role.Editor, true]
}

/*
const person  = {
    name: "Sujay",
    age: 25,
    hobbies: [ 'MMA', "Gaming"]
};
*/

console.log(`${person.name} is ${person.age} years old with role of ${person.role[0]} and is active: ${person.role[1]}`);

for (const hobby of person.hobbies) 
{
    console.log(hobby.toLowerCase());
}
