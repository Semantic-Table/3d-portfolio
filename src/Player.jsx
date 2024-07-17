import Ecctrl from 'ecctrl';

export function Player() {
  return <Ecctrl
    camInitDis={-0.01}
    camMinDis={-0.01}
    camFollowMult={100}
    turnVelMultiplier={1}
    turnSpeed={100}
    position={[14.5, 2, -8]}
    mode="CameraBasedMovement"
  >
  </Ecctrl>
}