class Dog extends Animal implements IWalk{
    makeSound(str: string): void {
        console.log("Dog makeSound " + str);
    }

    walkRight(): void {
        console.log("Dog walkRight");
    }
}