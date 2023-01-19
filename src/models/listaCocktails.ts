import { Cocktail } from "src/models/cocktail";

export let listaCocktails: Cocktail[] =

  [
    {
      nombre: 'Daiquiri',
      link: 'https://coctelia.com/daiquiri/',
      ingredientes: [
        { nombre: 'Ron Blanco', cantidad: 60 },
        { nombre: 'Zumo de Lima', cantidad: 22.5 },
        { nombre: 'Jarabe de Azúcar', cantidad: 22.5 },
      ]
    }
  ]