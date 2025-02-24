export interface Card {
  id: number;
  title: string;
  image: string;
  extendedIngredients?: Ingredient[];
}
export interface Ingredient {
  id: number;
  aisle: string;
  amount: number;
  name: string;
  image: string;
}
