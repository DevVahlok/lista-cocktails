import { NombreIngrediente } from "./ingrediente";


export let listaIngredientes: { nombre: NombreIngrediente, isAlcohol: boolean, checked: boolean }[] = [
  { nombre: 'Jarabe de Azúcar', isAlcohol: false, checked: false },
  { nombre: 'Zumo de Lima', isAlcohol: false, checked: false },
  { nombre: 'Ron Blanco', isAlcohol: true, checked: false },
]