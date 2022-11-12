// House Builder Example Code

import IglooDirector from './igloo-director';
import CastleDirector from './castle-director';
import HouseBoatDirector from './houseboat-director';

const IGLOO = IglooDirector.construct();
const CASTLE = CastleDirector.construct();
const HOUSEBOAT = HouseBoatDirector.construct();

console.log(IGLOO.construction()); // This is a Ice Igloo with 1 door(s) and 0 window(s).
console.log(CASTLE.construction()); // This is a Sandstone Castle with 100 door(s) and 200 window(s).
console.log(HOUSEBOAT.construction()); // This is a Wood House Boat with 6 door(s) and 8 window(s).
