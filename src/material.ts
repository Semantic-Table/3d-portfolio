import * as THREE from 'three';


import portalVertexShader from './shaders/portal/vertex.glsl';
import portalFragmentShader from './shaders/portal/fragment.glsl';

import fresnelBallVertexShader from './shaders/fresnelBall/vertex.glsl';
import fresnelBallFragmentShader from './shaders/fresnelBall/fragment.glsl';

export const portalMaterial = new THREE.ShaderMaterial({
  vertexShader: portalVertexShader,
  fragmentShader: portalFragmentShader,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: new THREE.Uniform(0),
  },
});

export const fresnelBallMaterial = new THREE.ShaderMaterial({
  vertexShader: fresnelBallVertexShader,
  fragmentShader: fresnelBallFragmentShader,
  uniforms: {
    uTime: new THREE.Uniform(0),
    uColor: new THREE.Uniform(new THREE.Color(0x000000)),
  },
});
