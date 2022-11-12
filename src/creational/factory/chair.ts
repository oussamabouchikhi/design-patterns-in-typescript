import { dimension } from './dimension';

interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

export default class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}
