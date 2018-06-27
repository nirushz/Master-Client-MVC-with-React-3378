let student1={
    name:"Nir"
}


student1.lastName="Z.";

console.log("student1",student1);  //student1 { name: 'Nir', lastName: 'Z.' }


student1.name="Shmulik";  //--> overriding prev val

console.log("student1",student1);  //student1 { name: ' Shmulik', lastName: 'Z.' }
console.log(`student1["name"]`,student1["name"]);  //Shmulik

let student2={
    [Symbol("Name")]:"Nir"
}
student2.lastName="Z.";
console.log("student2",student2); //student2 { lastName: 'Z.', [Symbol(Name)]: 'Nir' }

student2[Symbol("Name")]="Shmulik";
console.log("student2",student2); //student2 { lastName: 'Z.',[Symbol(Name)]: 'Nir',[Symbol(Name)]: 'Shmulik' }
console.log(`student2[Symbol("Name")]`,student2[Symbol("Name")]);  //undefined



let key1=Symbol("name");
let key2=Symbol("name");

let student3={
    [key1]:"Nir"
}

student3.lastName="Z.";
console.log("student3",student3); //student3 { lastName: 'Z.', [Symbol(Name)]: 'Nir' }

student3[key2]="Shmulik";
console.log("student3",student3); //student3 { lastName: 'Z.',[Symbol(Name)]: 'Nir',[Symbol(Name)]: 'Shmulik' }
console.log(`student3[key1")]`,student3[key1]);  //Nir
console.log(`student3[key2")]`,student3[key2]); //Shmulik