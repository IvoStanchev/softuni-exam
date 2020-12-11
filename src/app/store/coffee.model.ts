export class Coffee {
  public name: string;
  public price: number;
  public description: string;
  public roast: string;
  public imagePath: string;
  public weight: number;
  public date: Date;

  constructor(
    name: string,
    price: number,
    description: string,
    roast: string,
    imagePath: string,
    weight: number,
    date: Date
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.roast = roast;
    this.imagePath = imagePath;
    this.weight = weight;
    this.date = date;
  }
}
