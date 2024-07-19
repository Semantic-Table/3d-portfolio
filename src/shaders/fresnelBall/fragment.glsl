uniform float uTime;
uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;
varying float vNoise;

void main(){

  vec3 normal = normalize(vNormal);
  if(!gl_FrontFacing){
    normal *= -1.0;
  }

  //Fresnel
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  // float fresnel = dot(viewDirection, normal) + 1.0;
  // fresnel = pow(fresnel, 8.0);
  
  // vec3 black = vec3(0.0);

  // vec3 color = mix(black, vec3(1.0));

  // color = mix(color, uColor, vNoise);

  gl_FragColor = vec4(vec3(vNoise), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}