// Abstract Factory Use Case Example Code
import FurnitureFactory from './furniture-factory';

let FURNITURE = FurnitureFactory.getFurniture('SmallChair');
console.log(FURNITURE?.name); // SmallChair
console.log(FURNITURE?.getDimensions()); // { width: 40, depth: 40, height: 40 }

FURNITURE = FurnitureFactory.getFurniture('MediumTable');
console.log(FURNITURE?.name); // MediumTable
console.log(FURNITURE?.getDimensions()); // { width: 60, depth: 60, height: 60 }
