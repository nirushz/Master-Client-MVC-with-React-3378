abstract class Animal {
    age: number;
    firstName: string;

    abstract makeSound(str: string): void;  //function config without body

    constructor(ageParam: number, nameParm: string) {
        this.age = ageParam;
        this.firstName = nameParm;
    }
}