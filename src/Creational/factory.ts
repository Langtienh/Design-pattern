interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak(): void {
    console.log("Woof! Woof!");
  }
}

class Cat implements Animal {
  speak(): void {
    console.log("Meow! Meow!");
  }
}

enum AnimalType {
  Dog = "dog",
  Cat = "cat",
}

class AnimalFactory {
  static createAnimal(type: string): Animal {
    if (type === AnimalType.Dog) {
      return new Dog();
    }
    if (type === AnimalType.Cat) {
      return new Cat();
    }
    throw new Error("Invalid animal");
  }
}

const dog: Animal = AnimalFactory.createAnimal(AnimalType.Dog);
dog.speak(); // Output: Woof! Woof!

const cat: Animal = AnimalFactory.createAnimal(AnimalType.Cat);
cat.speak(); // Output: Meow! Meow!
