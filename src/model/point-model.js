import { mockPoints } from '../mock/point.js';

const POINT_COUNT = 9;

export default class PointModel {
  points = mockPoints;

  getPoints() {
    return this.points;
  }
}

export { POINT_COUNT };
