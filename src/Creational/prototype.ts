interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Phương thức clone để sao chép đối tượng
  public clone(): Prototype {
    return new Person(this.name, this.age);
  }

  // Phương thức hiển thị thông tin
  public displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const originalPerson = new Person("John Doe", 30);
const clonedPerson = originalPerson.clone() as Person;

// Hiển thị thông tin của đối tượng gốc và đối tượng sao chép
originalPerson.displayInfo(); // Output: Name: John Doe, Age: 30
clonedPerson.displayInfo(); // Output: Name: John Doe, Age: 30

// Thay đổi thông tin của đối tượng sao chép
clonedPerson.name = "Jane Doe";
clonedPerson.age = 25;

// Hiển thị lại thông tin để kiểm tra
originalPerson.displayInfo(); // Output: Name: John Doe, Age: 30
clonedPerson.displayInfo(); // Output: Name: Jane Doe, Age: 25
