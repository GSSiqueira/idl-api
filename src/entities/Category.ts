export class Category {
  id: number;
  name: string;
  type: number;

  constructor(id: number, name: string, type: number) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

export interface CategoryDTO {
  name: string;
  type: number;
}
