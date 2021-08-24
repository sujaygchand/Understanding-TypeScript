enum Role {Reader, Commenter, Editor};

const person: {
    name : string;
    age: number;
    hobbies : string[];
    role: [Role, boolean]; // tuple
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

function combine(input1: number | string, input2: number | string){  
    if(typeof input1 == 'number' && typeof input2 == 'number')
        return input1 + input2;

    return input1.toString() + input2.toString();
}

console.log(`Combined Numbers: ${combine(23, 27)} | Combined Name: ${combine("Wo", "omp")} | Mixed: ${combine("Woop", 5)}`);

function printValue(num : number) : void{
    console.log("Result is: " + num);
}

function add(num1 : number , num2 : number, callback: (num : number) => void){
        const result = num1 + num2;

		if(callback)
			callback(result);            
}

let outputFunction: (a: number | string, b: number | string) => number | string;
let outputVoid: (input: number) => void;


outputFunction = combine;
//outputVoid = printValue;

console.log(outputFunction(4, 5));

console.log(add(6, 15, (result) => {
	console.log("Final Result is " + result);
}));