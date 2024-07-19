uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;

#include ../includes/random2d.glsl
#include ../includes/cnoise.glsl

void main() {

  float noise = cnoise(vec3(position.x, position.y, uTime * .2) * 4.) * .2;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  vPosition = modelPosition.xyz;

  vNoise = noise;


  vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
  vNormal = modelNormal.xyz;

  vec4 viewPosition = viewMatrix * modelPosition;

  gl_Position = projectionMatrix * viewPosition;
}