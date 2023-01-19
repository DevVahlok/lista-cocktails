import { Cocktail } from "src/models/cocktail";

export let listaCocktails: Cocktail[] = [
  {
    nombre: 'Daiquiri',
    link: 'https://coctelia.com/daiquiri/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60 },
      { nombre: 'Zumo de Lima', cantidad: 22.5 },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5 },
    ]
  },
  {
    nombre: 'Caipirissima',
    link: 'https://coctelia.com/caipirissima/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60 },
      { nombre: 'Lima', cantidad: 1 },
      { nombre: 'Cucharada de Azúcar', cantidad: 3 },
    ]
  },
  {
    nombre: 'Ron Collins',
    link: 'https://coctelia.com/ron-collins/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60 },
      { nombre: 'Lima', cantidad: 1 },
      { nombre: 'Cucharada de Azúcar', cantidad: 3 },
    ]
  },
]