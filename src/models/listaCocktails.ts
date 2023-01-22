import { Cocktail } from "src/models/cocktail";

export let listaCocktails: Cocktail[] = [
  {
    nombre: 'Daiquiri',
    link: 'https://coctelia.com/daiquiri/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Caipirissima',
    link: 'https://coctelia.com/caipirissima/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Lima', cantidad: 1, unidad: '' },
      { nombre: 'Azúcar', cantidad: 3, unidad: 'cucharadas' },
    ]
  },
  {
    nombre: 'Ron Collins',
    link: 'https://coctelia.com/ron-collins/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Piña Colada',
    link: 'https://coctelia.com/pina-colada/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 90, unidad: 'ml' },
      { nombre: 'Crema de Coco', cantidad: 120, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 120, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Piña Colada Cubana',
    link: 'https://coctelia.com/pina-colada-cubana/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 60, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Canchánchara',
    link: 'https://coctelia.com/canchanchara/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Miel', cantidad: 22.5, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Cuba Libre',
    link: 'https://coctelia.com/cuba-libre/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 7.5, unidad: 'ml' },
      { nombre: 'Coca-Cola', cantidad: 1, unidad: '' }
    ]
  },
  {
    nombre: 'Mojito',
    link: 'https://coctelia.com/mojito/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Menta', cantidad: 10, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Mojito de Coco',
    link: 'https://coctelia.com/mojito-de-coco/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 30, unidad: 'ml' },
      { nombre: 'Crema de Coco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Menta', cantidad: 10, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: `Bee's Knees`,
    link: 'https://coctelia.com/bees-knees/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 30, unidad: 'ml' },
      { nombre: 'Jarabe de Miel', cantidad: 22.5, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Chi Chi',
    link: 'https://coctelia.com/chi-chi/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 45, unidad: 'ml' },
      { nombre: 'Crema de Coco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 120, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Pantera Rosa',
    link: 'https://coctelia.com/pantera-rosa/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 30, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 60, unidad: 'ml' },
      { nombre: 'Crema de Coco', cantidad: 60, unidad: 'ml' },
    ]
  },
  {
    nombre: 'San Francisco',
    link: 'https://coctelia.com/san-francisco/',
    ingredientes: [
      { nombre: 'Zumo de Naranja', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 30, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Bacardí',
    link: 'https://coctelia.com/bacardi-coctel/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' }
    ]
  },
  {
    nombre: `Planter's Punch`,
    link: 'https://coctelia.com/planters-punch/',
    ingredientes: [
      { nombre: 'Ron Oscuro', cantidad: 90, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 15, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 15, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 5, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Ginebra con Coco',
    link: 'https://coctelia.com/ginebra-con-coco/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 15, unidad: 'ml' },
      { nombre: 'Agua de Coco', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Dirty Shirley',
    link: 'https://coctelia.com/dirty-shirley/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 15, unidad: 'ml' },
      { nombre: 'Gaseosa de Limón', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Caipiroska',
    link: 'https://coctelia.com/caipiroska/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Limón', cantidad: 1, unidad: '' },
      { nombre: 'Azúcar', cantidad: 5, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Destornillador',
    link: 'https://coctelia.com/destornillador/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Naranja', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Barbados Surprise',
    link: 'https://coctelia.com/barbados-surprise/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 45, unidad: 'ml' },
      { nombre: 'Zumo de Naranja', cantidad: 150, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Mojito Azul',
    link: 'https://coctelia.com/mojito-azul/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 45, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Menta', cantidad: 10, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Blue Hawaiian',
    link: 'https://coctelia.com/blue-hawaiian/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 45, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 60, unidad: 'ml' },
      { nombre: 'Crema de Coco', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Margarita Azul',
    link: 'https://coctelia.com/margarita-azul/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Surfer Jäger',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 45, unidad: 'ml' },
      { nombre: 'Ron de Coco', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Reservoir Dog',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, unidad: 'ml' },
      { nombre: `Bailey's`, cantidad: 60, unidad: 'ml' }
    ]
  },
  {
    nombre: `Hunter's Tea`,
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 120, unidad: 'ml' },
      { nombre: 'Mermelada de Naranja', cantidad: 7, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 60, unidad: 'ml' },
      { nombre: 'Té Negro', cantidad: 60, unidad: 'ml' },
      { nombre: 'Jarabe de Arce', cantidad: 7, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Mojito Jäger',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, unidad: 'ml' },
      { nombre: 'Menta', cantidad: 10, unidad: 'hojas' },
      { nombre: 'Azúcar', cantidad: 10, unidad: 'ml' },
      { nombre: 'Limón', cantidad: 1.5, unidad: '' },
      { nombre: 'Soda de Agua', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Hot Shot',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 60, unidad: 'ml' },
      { nombre: 'Tequila', cantidad: 60, unidad: 'ml' },
      { nombre: 'Salsa de Tabasco', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Grizzly Bear',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, unidad: 'ml' },
      { nombre: 'Amaretto', cantidad: 30, unidad: 'ml' },
      { nombre: 'Licor de Café', cantidad: 30, unidad: 'ml' },
      { nombre: 'Leche Batida', cantidad: 60, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Sweet Deer',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 30, unidad: 'ml' },
      { nombre: 'Coca-Cola', cantidad: 150, unidad: 'ml' },
      { nombre: 'Helado de Vainilla', cantidad: 1, unidad: 'bola' },
    ]
  },
  {
    nombre: 'Jägerbomb',
    link: 'https://www.thebeertimes.com/las-mejores-recetas-de-cocteles-con-jagermeister/',
    ingredientes: [
      { nombre: 'Jägermeister', cantidad: 45, unidad: 'ml' },
      { nombre: 'Red Bull', cantidad: 120, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Laguna Azul',
    link: 'https://coctelia.com/laguna-azul/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 120, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Blue Hawaii',
    link: 'https://coctelia.com/blue-hawaii/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 60, unidad: 'ml' },
      { nombre: 'Sour Mix', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Cuba Bella',
    link: 'https://coctelia.com/cuba-bella/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 20, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 20, unidad: 'ml' },
      { nombre: 'Granadina', cantidad: 30, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Blue Bayou',
    link: 'https://coctelia.com/blue-bayou/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 60, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Piña', cantidad: 120, unidad: 'ml' },
      { nombre: 'Zumo de Pomelo', cantidad: 60, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Adiós Motherfucker',
    link: 'https://coctelia.com/adios-motherfucker/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 15, unidad: 'ml' },
      { nombre: 'Tequila', cantidad: 15, unidad: 'ml' },
      { nombre: 'Ginebra', cantidad: 15, unidad: 'ml' },
      { nombre: 'Vodka', cantidad: 15, unidad: 'ml' },
      { nombre: 'Curaçao Azul', cantidad: 15, unidad: 'ml' },
      { nombre: 'Sour Mix', cantidad: 60, unidad: 'ml' },
      { nombre: 'Fanta de Limón', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Rompope',
    link: 'https://coctelia.com/rompope/',
    ingredientes: [
      { nombre: 'Leche', cantidad: 4, unidad: 'tazas' },
      { nombre: 'Azúcar', cantidad: 1, unidad: 'taza' },
      { nombre: 'Canela', cantidad: 2, unidad: 'palitos' },
      { nombre: 'Extracto de Vainilla', cantidad: 1, unidad: 'cucharada' },
      { nombre: 'Bicarbonato de Sodio', cantidad: 0.25, unidad: 'cucharada' },
      { nombre: 'Yema de Huevo', cantidad: 6, unidad: '' },
      { nombre: 'Ron Blanco', cantidad: 0.5, unidad: 'taza' },
    ]
  },
  {
    nombre: 'Chimayó',
    link: 'https://coctelia.com/chimayo/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Licor Grosella Negra', cantidad: 7.5, unidad: 'ml' },
      { nombre: 'Sidra de Manzana', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 15, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Vodka Soda',
    link: 'https://coctelia.com/vodka-soda/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 45, unidad: 'ml' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' }
    ]
  },
  {
    nombre: 'Margarita del Diablo',
    link: 'https://coctelia.com/margarita-del-diablo/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 15, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, unidad: 'ml' },
      { nombre: 'Vino Tinto', cantidad: 15, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Suffering Bastard',
    link: 'https://coctelia.com/suffering-bastard/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 30, unidad: 'ml' },
      { nombre: 'Whisky', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 15, unidad: 'ml' },
      { nombre: 'Amargo de Angostura', cantidad: 2, unidad: 'chorritos' },
      { nombre: 'Cerveza de Jengibre', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Gin Rickey',
    link: 'https://coctelia.com/gin-rickey/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 15, unidad: 'ml' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'El Diablo',
    link: 'https://coctelia.com/el-diablo/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 15, unidad: 'ml' },
      { nombre: 'Licor Grosella Negra', cantidad: 15, unidad: 'ml' },
      { nombre: 'Cerveza de Jengibre', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Whisky Highball',
    link: 'https://coctelia.com/whisky-highball/',
    ingredientes: [
      { nombre: 'Whisky', cantidad: 60, unidad: 'ml' },
      { nombre: 'Agua con Gas', cantidad: 120, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Margarita de Sidra de Manzana',
    link: 'https://coctelia.com/margarita-de-sidra-de-manzana/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Sidra de Manzana', cantidad: 60, unidad: '' },
      { nombre: 'Licor Triple Sec', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 30, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Negroni Frozen',
    link: 'https://coctelia.com/negroni-frozen/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 30, unidad: 'ml' },
      { nombre: 'Campari', cantidad: 30, unidad: 'ml' },
      { nombre: 'Vermut Blanco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Zumo de Naranja', cantidad: 1, unidad: '' }
    ]
  },
  {
    nombre: 'Tequila Daisy con Sidra de Manzana',
    link: 'https://coctelia.com/tequila-daisy-con-sidra-de-manzana/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 45, unidad: 'ml' },
      { nombre: 'Grand Marnier', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 15, unidad: 'ml' },
      { nombre: 'Jarabe de Sidra de Manzana', cantidad: 15, unidad: 'ml' },
      { nombre: 'Sidra de Manzana', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Whisky Sour con Sidra',
    link: 'https://coctelia.com/whisky-sour-escoces-con-sidra/',
    ingredientes: [
      { nombre: 'Whisky', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Sidra de Manzana', cantidad: 22.5, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Negroni de Café',
    link: 'https://coctelia.com/negroni-de-cafe/',
    ingredientes: [
      { nombre: 'Campari', cantidad: 30, unidad: 'ml' },
      { nombre: 'Vermut Blanco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Café', cantidad: 30, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Negroni Sbagliato',
    link: 'https://coctelia.com/negroni-sbagliato/',
    ingredientes: [
      { nombre: 'Campari', cantidad: 30, unidad: 'ml' },
      { nombre: 'Vermut Blanco', cantidad: 30, unidad: 'ml' },
      { nombre: 'Vino Blanco', cantidad: 1, unidad: '' }
    ]
  },
  {
    nombre: 'Milano-Torino',
    link: 'https://coctelia.com/milano-torino/',
    ingredientes: [
      { nombre: 'Campari', cantidad: 30, unidad: 'ml' },
      { nombre: 'Vermut Blanco', cantidad: 30, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Corpse Reviver No. 2',
    link: 'https://coctelia.com/corpse-reviver-no-2/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Vino Blanco', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Licor Triple Sec', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Absenta', cantidad: 1, unidad: 'chorrito' },
    ]
  },
  {
    nombre: 'Vodka Spritzer de Limón y Albahaca',
    link: 'https://coctelia.com/vodka-spritzer-de-limon-y-albahaca/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 45, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, unidad: 'ml' },
      { nombre: 'Albahaca', cantidad: 15, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Mojito de Fresa y Albahaca',
    link: 'https://coctelia.com/mojito-de-fresa-y-albahaca/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 45, unidad: 'ml' },
      { nombre: 'Jarabe de Fresa', cantidad: 30, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Albahaca', cantidad: 15, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Vodka Martini',
    link: 'https://coctelia.com/vodka-martini/',
    ingredientes: [
      { nombre: 'Vodka', cantidad: 75, unidad: 'ml' },
      { nombre: 'Vermut Seco', cantidad: 15, unidad: 'ml' }
    ]
  },
  {
    nombre: 'Mojito de albahaca',
    link: 'https://coctelia.com/mojito-de-albahaca/',
    ingredientes: [
      { nombre: 'Ron Blanco', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Albahaca', cantidad: 15, unidad: 'hojas' },
      { nombre: 'Agua con Gas', cantidad: 1, unidad: '' },
    ]
  },
  {
    nombre: 'Bellini',
    link: 'https://coctelia.com/bellini/',
    ingredientes: [
      { nombre: 'Vino Blanco', cantidad: 120, unidad: 'ml' },
      { nombre: 'Puré de Melocotón', cantidad: 60, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Army & Navy',
    link: 'https://coctelia.com/army-navy/',
    ingredientes: [
      { nombre: 'Ginebra', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 60, unidad: 'ml' },
      { nombre: 'Sirope de Horchata', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Amargo de Angostura', cantidad: 1, unidad: 'chorrito' },
    ]
  },
  {
    nombre: 'Margarita Cadillac',
    link: 'https://coctelia.com/margarita-cadillac/',
    ingredientes: [
      { nombre: 'Tequila', cantidad: 60, unidad: 'ml' },
      { nombre: 'Zumo de Lima', cantidad: 30, unidad: 'ml' },
      { nombre: 'Aguamiel', cantidad: 15, unidad: 'ml' },
      { nombre: 'Grand Marnier', cantidad: 7.5, unidad: 'ml' },
    ]
  },
  {
    nombre: 'Kentucky Buck',
    link: 'https://coctelia.com/kentucky-buck/',
    ingredientes: [
      { nombre: 'Whisky', cantidad: 60, unidad: 'ml' },
      { nombre: 'Jarabe de Azúcar', cantidad: 15, unidad: 'ml' },
      { nombre: 'Zumo de Limón', cantidad: 22.5, unidad: 'ml' },
      { nombre: 'Amargo de Angostura', cantidad: 2, unidad: 'chorrito' },
      { nombre: 'Fresa', cantidad: 2, unidad: '' },
      { nombre: 'Cerveza de Jengibre', cantidad: 1, unidad: '' },
    ]
  },
]