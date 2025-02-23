export interface Card {
  id: number;
  title: string;
  image: string;
  extendedIngredients?: Ingredient[];
}
export interface Ingredient {
  aisel: string;
  amount: number;
  name: string;
  image: string;
}
