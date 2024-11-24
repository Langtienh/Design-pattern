interface Target {
  request(): string;
}

class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function adapterClientCode(target: Target) {
  console.log(target.request());
}

const adaptee = new Adaptee();
console.log("Adaptee interface is incompatible with the client.");
console.log(`Adaptee: ${adaptee.specificRequest()}`);

const adapter = new Adapter(adaptee);
console.log("Client can work with the adapter.");
adapterClientCode(adapter);
