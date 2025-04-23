export class Alimento {
    id?: string; // ID opcional para manejar alimentos en Firestore
    protein: number;
    carbs: number;
    fat: number;
    categoria: string;
  
    constructor(protein: number, carbs: number, fat: number, categoria: string) {
      this.protein = protein;
      this.carbs = carbs;
      this.fat = fat;
      this.categoria = categoria;
    }
  }
  