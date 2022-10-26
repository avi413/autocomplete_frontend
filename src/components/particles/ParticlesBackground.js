import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../config/particlesConfig';

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={particlesConfig}
    />
  );
}

export default ParticlesBackground;
