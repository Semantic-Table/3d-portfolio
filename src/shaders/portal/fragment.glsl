uniform float uTime;

varying vec2 vUv;

#include ../includes/cnoise.glsl;

void main() {

  vec2 uv = vUv;

  float noise = cnoise(vec3(vUv * 20., uTime * 0.5));
  vec2 uvDisplacement = uv * 0.5 + 0.5;
  float strength = cnoise(vec3(vec3(uvDisplacement * 30., uTime * 0.8)));
  noise += strength;

  vec3 outsideColor = vec3(.0, .0, .0);
  vec3 insideColor = vec3(.2, .0, .2);
  float distanceFromCenter = smoothstep(0.1, 0.5, 0.6 - distance(uv, vec2(0.5)));

  float finalNoise = fract(noise);
  finalNoise *= distanceFromCenter;
  finalNoise =  step(finalNoise, 0.3);
  vec3 color = mix(insideColor, outsideColor, finalNoise);

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}