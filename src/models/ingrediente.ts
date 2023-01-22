export interface Ingrediente {
    nombre: NombreIngrediente,
    cantidad: number | string | null,
    unidad: string
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
    'Menta' |
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
    'Red Bull' |
    'Sour Mix' |
    'Zumo de Pomelo' |
    'Fanta de Limón' |
    'Leche' |
    'Canela' |
    'Extracto de Vainilla' |
    'Bicarbonato de Sodio' |
    'Yema de Huevo' |
    'Licor Grosella Negra' |
    'Sidra de Manzana' |
    'Vino Tinto' |
    'Amargo de Angostura' |
    'Cerveza de Jengibre' |
    'Whisky' |
    'Licor Triple Sec' |
    'Campari' |
    'Vermut Blanco' |
    'Grand Marnier' |
    'Jarabe de Sidra de Manzana' |
    'Café' |
    'Vino Blanco' |
    'Absenta' |
    'Albahaca' |
    'Jarabe de Fresa' |
    'Vermut Seco' |
    'Puré de Melocotón' |
    'Sirope de Horchata' |
    'Aguamiel' |
    'Fresa'
    ;