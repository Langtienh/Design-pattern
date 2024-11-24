interface Chair {
  sitOn(): void;
}

interface Sofa {
  lieOn(): void;
}

class ModernChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

class VictorianChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class ModernSofa implements Sofa {
  lieOn(): void {
    console.log("Lying on a modern sofa.");
  }
}

class VictorianSofa implements Sofa {
  lieOn(): void {
    console.log("Lying on a Victorian sofa.");
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

function clientCode(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  chair.sitOn();
  sofa.lieOn();
}

// Sử dụng ModernFurnitureFactory
console.log("Client: Testing client code with the ModernFurnitureFactory:");
clientCode(new ModernFurnitureFactory());

// Sử dụng VictorianFurnitureFactory
console.log("Client: Testing client code with the VictorianFurnitureFactory:");
clientCode(new VictorianFurnitureFactory());
