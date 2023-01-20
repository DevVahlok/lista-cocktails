import { Cocktail } from "src/models/cocktail";

export let listaCocktails: Cocktail[] = [
  {
    nombre: 'Daiquiri',
    link: 'https://coctelia.com/daiquiri/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Lima', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, isLiquid: true },
    ]
  },
  {
    nombre: 'Caipirissima',
    link: 'https://coctelia.com/caipirissima/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Lima', cantidad: 1, isLiquid: false },
      { nombre: 'Azúcar', cantidad: 15, isLiquid: false },
    ]
  },
  {
    nombre: 'Ron Collins',
    link: 'https://coctelia.com/ron-collins/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, isLiquid: true },
      { nombre: 'Agua con Gas', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Piña Colada',
    link: 'https://coctelia.com/pina-colada/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 90, isLiquid: true },
      { nombre: 'Crema de Coco', cantidad: 120, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 120, isLiquid: true }
    ]
  },
  {
    nombre: 'Piña Colada Cubana',
    link: 'https://coctelia.com/pina-colada-cubana/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 30, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 60, isLiquid: true },
    ]
  },
  {
    nombre: 'Canchánchara',
    link: 'https://coctelia.com/canchanchara/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Miel', cantidad: 22.5, isLiquid: true }
    ]
  },
  {
    nombre: 'Cuba Libre',
    link: 'https://coctelia.com/cuba-libre/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 7.5, isLiquid: true },
      { nombre: 'Coca-Cola', cantidad: 1, isLiquid: false }
    ]
  },
  {
    nombre: 'Mojito',
    link: 'https://coctelia.com/mojito/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, isLiquid: true },
      { nombre: 'Zumo de Lima', cantidad: 22.5, isLiquid: true },
      { nombre: 'Hoja de Menta', cantidad: 10, isLiquid: false },
      { nombre: 'Agua con Gas', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Mojito de Coco',
    link: 'https://coctelia.com/mojito-de-coco/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 30, isLiquid: true },
      { nombre: 'Crema de Coco', cantidad: 30, isLiquid: true },
      { nombre: 'Hoja de Menta', cantidad: 10, isLiquid: false },
      { nombre: 'Agua con Gas', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: `Bee's Knees`,
    link: 'https://coctelia.com/bees-knees/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 30, isLiquid: true },
      { nombre: 'Jarabe de Miel', cantidad: 22.5, isLiquid: true }
    ]
  },
  {
    nombre: 'Chi Chi',
    link: 'https://coctelia.com/chi-chi/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 45, isLiquid: true },
      { nombre: 'Crema de Coco', cantidad: 30, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 120, isLiquid: true }
    ]
  },
  {
    nombre: 'Pantera Rosa',
    link: 'https://coctelia.com/pantera-rosa/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Granadina', cantidad: 30, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 60, isLiquid: true },
      { nombre: 'Crema de Coco', cantidad: 60, isLiquid: true },
    ]
  },
  {
    nombre: 'San Francisco',
    link: 'https://coctelia.com/san-francisco/',
    ingredientes: [
      { nombre: 'Zumo de Naranja', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 30, isLiquid: true },
      { nombre: 'Granadina', cantidad: 30, isLiquid: true },
    ]
  },
  {
    nombre: 'Bacardí',
    link: 'https://coctelia.com/bacardi-coctel/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, isLiquid: true },
      { nombre: 'Granadina', cantidad: 22.5, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true }
    ]
  },
  {
    nombre: `Planter's Punch`,
    link: 'https://coctelia.com/planters-punch/',
    ingredientes: [
      { nombre: 'Ron Oscuro', cantidad: 90, isLiquid: true },
      { nombre: 'Zumo de Lima', cantidad: 30, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 15, isLiquid: true },
      { nombre: 'Granadina', cantidad: 15, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 5, isLiquid: true },
    ]
  },
  {
    nombre: 'Ginebra con Coco',
    link: 'https://coctelia.com/ginebra-con-coco/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 15, isLiquid: true },
      { nombre: 'Agua de Coco', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Dirty Shirley',
    link: 'https://coctelia.com/dirty-shirley/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, isLiquid: true },
      { nombre: 'Granadina', cantidad: 15, isLiquid: true },
      { nombre: 'Gaseosa de Limón', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Caipiroska',
    link: 'https://coctelia.com/caipiroska/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, isLiquid: true },
      { nombre: 'Limón', cantidad: 1, isLiquid: false },
      { nombre: 'Azúcar', cantidad: 5, isLiquid: true },
    ]
  },
  {
    nombre: 'Destornillador',
    link: 'https://coctelia.com/destornillador/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, isLiquid: true },
      { nombre: 'Zumo de Naranja', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Barbados Surprise',
    link: 'https://coctelia.com/barbados-surprise/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 30, isLiquid: true },
      { nombre: 'Curaçao Azul', cantidad: 22.5, isLiquid: true },
      { nombre: 'Granadina', cantidad: 45, isLiquid: true },
      { nombre: 'Zumo de Naranja', cantidad: 150, isLiquid: true },
    ]
  },
  {
    nombre: 'Mojito Azul',
    link: 'https://coctelia.com/mojito-azul/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 45, isLiquid: true },
      { nombre: 'Curaçao Azul', cantidad: 15, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, isLiquid: true },
      { nombre: 'Hoja de Menta', cantidad: 10, isLiquid: false },
      { nombre: 'Agua con Gas', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Blue Hawaiian',
    link: 'https://coctelia.com/blue-hawaiian/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 45, isLiquid: true },
      { nombre: 'Curaçao Azul', cantidad: 22.5, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 60, isLiquid: true },
      { nombre: 'Crema de Coco', cantidad: 30, isLiquid: true },
    ]
  },
  {
    nombre: 'Margarita Azul',
    link: 'https://coctelia.com/margarita-azul/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, isLiquid: true },
      { nombre: 'Curaçao Azul', cantidad: 15, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 22.5, isLiquid: true },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, isLiquid: true },
    ]
  },
  {
    nombre: 'Surfer Jäger',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, isLiquid: true },
      { nombre: 'Zumo de Piña', cantidad: 45, isLiquid: true },
      { nombre: 'Ron de Coco', cantidad: 30, isLiquid: true },
    ]
  },
  {
    nombre: 'Reservoir Dog',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, isLiquid: true },
      { nombre: `Bailey's`, cantidad: 60, isLiquid: true }
    ]
  },
  {
    nombre: `Hunter's Tea`,
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 120, isLiquid: true },
      { nombre: 'Mermelada de Naranja', cantidad: 7, isLiquid: true },
      { nombre: 'Zumo de Limón', cantidad: 60, isLiquid: true },
      { nombre: 'Té Negro', cantidad: 60, isLiquid: true },
      { nombre: 'Jarabe de Arce', cantidad: 7, isLiquid: true },
    ]
  },
  {
    nombre: 'Mojito Jäger',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, isLiquid: true },
      { nombre: 'Hoja de Menta', cantidad: 10, isLiquid: false },
      { nombre: 'Azúcar', cantidad: 10, isLiquid: true },
      { nombre: 'Limón', cantidad: 1.5, isLiquid: false },
      { nombre: 'Soda de Agua', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Hot Shot',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, isLiquid: true },
      { nombre: 'Tequila', cantidad: 60, isLiquid: true },
      { nombre: 'Salsa de Tabasco', cantidad: 30, isLiquid: true },
    ]
  },
  {
    nombre: 'Grizzly Bear',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, isLiquid: true },
      { nombre: 'Amaretto', cantidad: 30, isLiquid: true },
      { nombre: 'Licor de Café', cantidad: 30, isLiquid: true },
      { nombre: 'Leche Batida', cantidad: 60, isLiquid: true },
    ]
  },
  {
    nombre: 'Sweet Deer',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, isLiquid: true },
      { nombre: 'Coca-Cola', cantidad: 150, isLiquid: true },
      { nombre: 'Helado de Vainilla', cantidad: 1, isLiquid: false },
    ]
  },
  {
    nombre: 'Jägerbomb',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 45, isLiquid: true },
      { nombre: 'Red Bull', cantidad: 120, isLiquid: true },
    ]
  },
]