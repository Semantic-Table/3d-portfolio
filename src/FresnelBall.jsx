import { useFrame } from "@react-three/fiber";
import { fresnelBallMaterial } from "./material";
export default function FresnelBall() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    fresnelBallMaterial.uniforms.uTime.value = time;
  });

  return (
    <mesh position={[15.7, 3, 24.35]} material={fresnelBallMaterial}>
      <sphereGeometry args={[1, 64, 64]} />
    </mesh>
  );
}
