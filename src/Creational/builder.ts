class House {
  public doors: number;
  public windows: number;
  public hasGarage: boolean;
  public hasSwimmingPool: boolean;
  public hasGarden: boolean;

  constructor() {
    this.doors = 0;
    this.windows = 0;
    this.hasGarage = false;
    this.hasSwimmingPool = false;
    this.hasGarden = false;
  }
}

class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  setDoors(doors: number): HouseBuilder {
    this.house.doors = doors;
    return this;
  }

  setWindows(windows: number): HouseBuilder {
    this.house.windows = windows;
    return this;
  }

  setGarage(hasGarage: boolean): HouseBuilder {
    this.house.hasGarage = hasGarage;
    return this;
  }

  setSwimmingPool(hasSwimmingPool: boolean): HouseBuilder {
    this.house.hasSwimmingPool = hasSwimmingPool;
    return this;
  }

  setGarden(hasGarden: boolean): HouseBuilder {
    this.house.hasGarden = hasGarden;
    return this;
  }

  build(): House {
    return this.house;
  }
}

const house = new HouseBuilder()
  .setDoors(4)
  .setWindows(8)
  .setGarage(true)
  .setSwimmingPool(true)
  .setGarden(true)
  .build();

console.log(house);
// Output:
// House {
//   doors: 4,
//   windows: 8,
//   hasGarage: true,
//   hasSwimmingPool: true,
//   hasGarden: true
// }
