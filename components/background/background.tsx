'use client'
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import styles from './background.module.scss';


export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  
  return (
    <div className={styles.background_wrapper}>
    <Particles
    id='tsparticles'
    init={particlesInit}
    options={{
      fullScreen: {
          enable: true,
          zIndex: -1,
      },
      background: {
        color: {
          value: '#232134',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#FFFFFF',
        },
        links: {
          color: '#FFFFFF',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'none',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
  </div>
  )
}
