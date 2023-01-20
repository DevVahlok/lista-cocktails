export interface Ingrediente {
    nombre: NombreIngrediente,
    cantidad: number | string | null,
    isLiquid: boolean
}

export type NombreIngrediente =
    'Ron Blanco' |
    'Zumo de Lima' |
    'Jarabe de Azúcar' |
    'Lima' |
    'Azúcar' |
    'Zumo de Limón' |
    'Agua con Gas' |
    'Crema de Coco' |
    'Zumo de Piña' |
    'Jarabe de Miel' |
    'Coca-Cola' |
    'Hoja de Menta' |
    'Ginebra' |
    'Vodka' |
    'Granadina' |
    'Zumo de Naranja' |
    'Ron Oscuro' |
    'Agua de Coco' |
    'Gaseosa de Limón' |
    'Limón' |
    'Curaçao Azul' |
    'Tequila' |
    'Jägermeister' |
    'Ron de Coco' |
    `Bailey's` |
    'Mermelada de Naranja' |
    'Jarabe de Arce' |
    'Té Negro' |
    'Soda de Agua' |
    'Salsa de Tabasco' |
    'Amaretto' |
    'Licor de Café' |
    'Leche Batida' |
    'Helado de Vainilla' |
    'Red Bull'
    ;