import { useGLTF } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { portalMaterial } from './material'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function World(props) {
  const { nodes, materials } = useGLTF('/portfolio.glb')

  const portalGeometry = new THREE.CircleGeometry(1.8, 32)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    portalMaterial.uniforms.uTime.value = time
  })

  return (
    <RigidBody colliders='trimesh' type='fixed'>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.houseground.geometry}
          material={materials.stone}
          position={[14.422, 0.392, -7.544]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall.geometry}
          material={materials.darkwood}
          position={[13.617, 1.993, -7.63]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stairs.geometry}
          material={materials.stone}
          position={[13.647, 0.33, -5.644]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roof.geometry}
          material={materials.roof}
          position={[14.444, 3.965, -7.533]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frame.geometry}
          material={materials.stone}
          position={[12.755, 1.836, -8.159]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table.geometry}
          material={materials.darkwood}
          position={[12.85, 0.953, -6.969]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bowl.geometry}
          material={materials.wood}
          position={[12.828, 1.272, -6.951]}
        />
        <group position={[12.949, 1.282, -6.697]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_2.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_3.geometry}
            material={materials.aluminium}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={nodes.Icosphere.material}
          position={[12.959, 1.311, -6.622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fireplace.geometry}
          material={materials.darkstone}
          position={[15.489, 1.368, -8.614]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fireplacewood.geometry}
          material={materials.wood}
          position={[15.484, 0.886, -8.566]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tvtable.geometry}
          material={materials.darkwood}
          position={[15.467, 0.828, -6.367]}
        />
        <group position={[15.36, 1.465, -6.389]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_2.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_3.geometry}
            material={materials.darkwood}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tvfeet.geometry}
          material={materials.plastic}
          position={[15.446, 1.146, -6.407]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.blanket.geometry}
          material={materials.blanket}
          position={[13.585, 0.959, -8.575]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.matelas.geometry}
          material={materials.matelas}
          position={[13.845, 0.892, -9.136]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.piedsdelit.geometry}
          material={materials.darkwood}
          position={[13.671, 0.719, -8.736]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow.geometry}
          material={materials.pillow}
          position={[13.875, 0.986, -9.194]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sofa.geometry}
          material={materials.sofa}
          position={[14.704, 1.145, -7.564]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.apple.geometry}
          material={materials.apple}
          position={[12.869, 1.359, -6.949]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.appletail.geometry}
          material={materials.grass}
          position={[12.871, 1.398, -6.952]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.grass}
          position={[5.797, 0, -4.251]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock.geometry}
          material={materials.stone}
          position={[-5.111, 0.498, 4.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock001.geometry}
          material={materials.stone}
          position={[-3.079, 0.868, -5.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock002.geometry}
          material={materials.stone}
          position={[-5.217, 0.458, -4.748]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock003.geometry}
          material={materials.stone}
          position={[-5.482, 0.552, 2.902]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock004.geometry}
          material={nodes.rock004.material}
          position={[-2.792, 4.17, -27.746]}
          rotation={[-Math.PI, 0.296, -Math.PI]}
          scale={1.208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock005.geometry}
          material={nodes.rock005.material}
          position={[-8.062, 6.156, -23.427]}
          scale={1.434}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock006.geometry}
          material={materials.stone}
          position={[-2.989, 0.698, 3.072]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock007.geometry}
          material={nodes.rock007.material}
          position={[-7.567, 5.475, -33.461]}
          scale={1.434}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock008.geometry}
          material={nodes.rock008.material}
          position={[-1.496, 2.584, -34.373]}
          rotation={[-Math.PI, 0.296, -Math.PI]}
          scale={1.208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock009.geometry}
          material={materials.stone}
          position={[-14.774, 0.963, -6.795]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock010.geometry}
          material={materials.stone}
          position={[-3.454, 0.516, 4.899]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock011.geometry}
          material={materials.stone}
          position={[0.981, -0.258, 4.335]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock012.geometry}
          material={materials.stone}
          position={[4.913, -0.352, 3.772]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock013.geometry}
          material={materials.stone}
          position={[-4.98, 1.408, 17.07]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock014.geometry}
          material={materials.stone}
          position={[-11.134, -6.432, 6.502]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock015.geometry}
          material={materials.stone}
          position={[-12.878, 0.868, -20.232]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock016.geometry}
          material={materials.stone}
          position={[-1.506, 0.868, -26.573]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock017.geometry}
          material={materials.stone}
          position={[16.398, 3.594, -24.199]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock018.geometry}
          material={materials.stone}
          position={[24.307, 0.963, -10.322]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock019.geometry}
          material={materials.stone}
          position={[26.14, -0.258, 9.681]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock020.geometry}
          material={materials.stone}
          position={[5.983, 1.896, 21.359]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier.geometry}
          material={materials.wood}
          position={[5.329, 0.473, 0.827]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier001.geometry}
          material={materials.wood}
          position={[2.404, 0.473, 0.935]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier002.geometry}
          material={materials.wood}
          position={[-0.848, 0.473, 0.599]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier003.geometry}
          material={materials.wood}
          position={[2.39, 0.473, -1.74]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier004.geometry}
          material={materials.wood}
          position={[5.629, 0.473, -1.893]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier005.geometry}
          material={materials.wood}
          position={[-0.701, 0.473, -1.773]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier006.geometry}
          material={materials.wood}
          position={[7.032, 0.473, -10.785]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier007.geometry}
          material={materials.wood}
          position={[2.439, 0.473, -10.664]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier008.geometry}
          material={materials.wood}
          position={[1.25, 0.473, -11.94]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier009.geometry}
          material={materials.wood}
          position={[1.018, 0.473, -14.268]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier010.geometry}
          material={materials.wood}
          position={[2.364, 0.473, -15.672]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier011.geometry}
          material={materials.wood}
          position={[4.805, 0.473, -16.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier012.geometry}
          material={materials.wood}
          position={[7.146, 0.473, -15.824]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier013.geometry}
          material={materials.wood}
          position={[8.464, 0.473, -14.344]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier014.geometry}
          material={materials.wood}
          position={[8.495, 0.473, -12.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier015.geometry}
          material={materials.wood}
          position={[8.402, 0.473, -2.865]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier016.geometry}
          material={materials.wood}
          position={[8.383, 0.473, 0.121]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier017.geometry}
          material={materials.wood}
          position={[11.151, 0.473, -1.41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrier018.geometry}
          material={materials.wood}
          position={[13.148, 0.473, -2.642]}
        />
        <group position={[0.006, 2.668, 1.163]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials.stone}
          />
        </group>
        <group position={[0, 2.866, 0.155]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.lamp}
          />
        </group>
        <group position={[0.221, 2.679, -2.621]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.stone}
          />
        </group>
        <group position={[0.314, 2.877, -1.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials.lamp}
          />
        </group>
        <group position={[4.435, 2.67, -2.398]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials.stone}
          />
        </group>
        <group position={[4.581, 2.868, -1.401]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials.lamp}
          />
        </group>
        <group position={[4.259, 2.67, 1.711]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.stone}
          />
        </group>
        <group position={[4.141, 2.868, 0.71]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_1.geometry}
            material={materials.lamp}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk001.geometry}
          material={materials.wood}
          position={[2.856, 0.225, -4.434]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk002.geometry}
          material={materials.wood}
          position={[4.95, 0.225, -5.332]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk.geometry}
          material={materials.wood}
          position={[0.758, 0.225, -4.594]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk003.geometry}
          material={materials.wood}
          position={[2.028, 0.225, -6.62]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.headaxe.geometry}
          material={materials.metal}
          position={[2.821, 0.693, -4.574]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.axehandle.geometry}
          material={materials.wood}
          position={[0.756, 0.702, -4.569]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.axehandle001.geometry}
          material={materials.wood}
          position={[2.062, 0.453, -4.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beech.geometry}
          material={materials.wood}
          position={[2.643, 1.096, -5.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beech2001.geometry}
          material={materials.wood}
          position={[-0.599, 0.217, -6.154]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beech2.geometry}
          material={materials.wood}
          position={[-0.599, 0.217, -6.677]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beech2002.geometry}
          material={materials.wood}
          position={[-0.599, 0.618, -6.414]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.stone}
          position={[-4.718, 0.082, -0.83]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.stone}
          position={[-5.231, 0.327, -0.873]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.stone}
          position={[-5.613, 2.401, -0.903]}
        />
        <mesh
          castShadow
          receiveShadow
          rotation={[0, Math.PI / 2, 0]}
          geometry={portalGeometry}
          material={portalMaterial}
          position={[-5.689, 1.685, -0.9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot.geometry}
          material={materials.soil}
          position={[2.702, 0.07, -11.997]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot001.geometry}
          material={materials.soil}
          position={[2.704, 0.07, -13.274]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot002.geometry}
          material={materials.soil}
          position={[2.429, 0.07, -14.569]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot003.geometry}
          material={materials.soil}
          position={[4.022, 0.071, -14.705]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot004.geometry}
          material={materials.soil}
          position={[4.237, 0.071, -13.304]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot005.geometry}
          material={materials.soil}
          position={[4.233, 0.071, -11.917]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot006.geometry}
          material={materials.soil}
          position={[5.991, 0.071, -12.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot007.geometry}
          material={materials.soil}
          position={[5.829, 0.071, -13.415]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot008.geometry}
          material={materials.soil}
          position={[5.636, 0.071, -14.801]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot009.geometry}
          material={materials.soil}
          position={[7.282, 0.071, -14.629]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot010.geometry}
          material={materials.soil}
          position={[7.331, 0.071, -13.266]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.farmPlot011.geometry}
          material={materials.soil}
          position={[7.48, 0.071, -11.976]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chestbox.geometry}
          material={materials.wood}
          position={[7.016, 0.616, -9.986]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.wood}
          position={[7.057, 0.962, -9.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant.geometry}
          material={nodes.plant.material}
          position={[8.396, 0.079, -10.52]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant001.geometry}
          material={nodes.plant001.material}
          position={[8.172, 0.141, -10.457]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant002.geometry}
          material={nodes.plant002.material}
          position={[8.354, 0.193, -10.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk.geometry}
          material={materials.wood}
          position={[-2.372, 5.102, -12.43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf.geometry}
          material={materials.leaf}
          position={[-2.261, 7.311, -13.266]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk001.geometry}
          material={materials.wood}
          position={[9.331, 4.244, -6.277]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf001.geometry}
          material={materials.leaf}
          position={[8.292, 6.22, -6.624]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk_2.geometry}
          material={materials.wood}
          position={[10.344, 4.602, -12.892]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf_2.geometry}
          material={materials.leaf}
          position={[10.419, 6.424, -12.439]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk_2001.geometry}
          material={materials.wood}
          position={[1.031, 5.45, -9.245]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf_2001.geometry}
          material={materials.leaf}
          position={[1.367, 7.618, -9.456]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf_3.geometry}
          material={materials.leaf}
          position={[6.513, 4.708, -18.396]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk_3.geometry}
          material={materials.wood}
          position={[6.445, 3.084, -18.061]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf_3001.geometry}
          material={materials.leaf}
          position={[0.992, 6.209, -17.936]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.treeTrunk_3001.geometry}
          material={materials.wood}
          position={[0.595, 4.059, -17.962]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stone.geometry}
          material={materials.stone}
          position={[-1.95, 1.107, 7.241]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dirtpile.geometry}
          material={materials.soil}
          position={[0.368, 0.115, 7.129]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.temple.geometry}
          material={materials.marble}
          position={[13.809, 2.498, 19.022]}
        />

      </group>
    </RigidBody>
  )
}

useGLTF.preload('/portfolio.glb')