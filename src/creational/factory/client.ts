import ChairFactory from './chair-factory';

const CHAIR = ChairFactory.getChair('SmallChair');
console.log(CHAIR.getDimensions()); // {'width': 40, 'depth': 40, 'height': 40}
