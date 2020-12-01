export class Coffee {
  public name: string;
  public description: string;
  public imagePath: string;
  public weight: number;
  public date: Date;

  constructor(
    name: string,
    description: string,
    roast: string,
    imagePath: string,
    weight: number,
    date: Date
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.weight = weight;
    this.date = date;
  }
}
