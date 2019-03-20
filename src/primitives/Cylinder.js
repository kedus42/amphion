import * as THREE from 'three';
import { DEFAULT_CYLINDER_RADIUS, DEFAULT_CYLINDER_HEIGHT, DEFAULT_RADIAL_SEGMENTS } from '../utils/defaults';
import Mesh from './Mesh';

class Cylinder extends Mesh {
  constructor(color, radius = DEFAULT_CYLINDER_RADIUS, height = DEFAULT_CYLINDER_HEIGHT) {
    super();
    this.radius = radius;
    this.height = height;
    this.geometry = new THREE.CylinderGeometry(
      radius,
      radius,
      height,
      DEFAULT_RADIAL_SEGMENTS
    );
    this.material = new THREE.MeshStandardMaterial({ color });
    this.rotateX(Math.PI / 2);
  }
}

export default Cylinder;
