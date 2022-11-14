// A hypothetical Cube tool from Company B
export interface ICubeB {
  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean;
}

export default class CubeB implements ICubeB {
  static last_time = Date.now();

  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean {
    // if not busy, then manufacture a cube with coords
    const now = Date.now();
    if (now > CubeB.last_time + 3000) {
      console.log(
        `Company B built Cube with coords [${top_left_front[0]},${top_left_front[1]},${top_left_front[2]}],[${bottom_right_back[0]},${bottom_right_back[1]},${bottom_right_back[2]}]`
      );
      CubeB.last_time = now;
      return true;
    } else {
      return false; // busy
    }
  }
}

/**
 * Output
 * node ./dist/adapter/client.js
 * Company A was busy, so trying company B
 * Company B was busy, so trying company A
 * Company A built Cube with dimensions 6x5x10
 * Company A was busy, so trying company B
 * Company B built Cube with coords [-4,-3,-2.5],[4,3,2.5]
 * Company A built Cube with dimensions 4x5x3
 * Company A was busy, so trying company B
 * Company B was busy, so trying company A
 * Company A built Cube with dimensions 10x2x1
 * Company A was busy, so trying company B
 * Company B built Cube with coords [-0.5,-2,-2.5],[0.5,2,2.5]
 * 5 cubes have been manufactured
 */
