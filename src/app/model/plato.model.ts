import { Alimento } from './alimento.model';

export class Plato {
  id?: string; // ID opcional generado por Firestore
  nombre: string; // Nombre del plato
  categoria: string; // Categoría del plato
  ingredientes: { alimento: Alimento; cantidad: number }[]; // Relación alimento + cantidad

  constructor(
    nombre: string,
    categoria: string,
    ingredientes: { alimento: Alimento; cantidad: number }[]
  ) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.ingredientes = ingredientes;
  }

  // Método para calcular las macros totales del plato
  calcularMacros() {
    const macros = { protein: 0, carbs: 0, fat: 0 };
    this.ingredientes.forEach(({ alimento, cantidad }) => {
      macros.protein += (alimento.protein * cantidad) / 100;
      macros.carbs += (alimento.carbs * cantidad) / 100;
      macros.fat += (alimento.fat * cantidad) / 100;
    });
    return macros;
  }
}
