export class Pokemon {
  id: number;
  name: string;
  type: string;
  color: string;

  constructor(name: string, type: string, color: string) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
