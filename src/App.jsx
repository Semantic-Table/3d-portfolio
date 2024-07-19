import { Environment, KeyboardControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import './App.css'
import { Player } from './Player'
import { World } from './World'
import { useRef, useEffect } from 'react'
import FresnelBall from './FresnelBall'
/**
 * Keyboard control preset
 */
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  // Optional animation key map
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
];
function App() {

  const canvasRef = useRef(null)

  // // lock pointer on canvas 
  document.body.requestPointerLock = document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock;

  document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;

  useEffect(() => {



    if (canvasRef.current) {
      canvasRef.current.addEventListener('click', () => {
        canvasRef.current.requestPointerLock();
      })

    }
  })



  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas ref={canvasRef}>
          <OrbitControls />
          <Environment preset='city' environmentIntensity={0.4} />
          <Physics debug={false}>
            <FresnelBall />
            <World />
            <Player />
          </Physics>

        </Canvas>
      </KeyboardControls>
    </>
  )
}

export default App
