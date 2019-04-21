export default class Hero {
  private static maxMagicVolume = 100

  // tslint:disable-next-line:no-empty
  constructor(
    private name: string,
    private price: number,
    private maxBloodVolume: number,
    private aggressivity: number,
    private armor: number,
    private resistance: number,
    private attackInterval: number,
  ) {
  }

  public greeting(): void {
    console.log(`
    name: ${this.name},
    price: ${this.price},
    maxBloodVolume: ${this.maxBloodVolume},
    maxMagicVolume: ${Hero.maxMagicVolume},
    aggressivity: ${this.aggressivity},
    armor: ${this.armor},
    resistance: ${this.resistance},
    attackInterval: ${this.attackInterval}
    `)
  }
}
