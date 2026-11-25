import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import Fluid from '@src/components/canvas/fluid/Fluid';
import { View } from '@react-three/drei';
import styles from '@src/pages/app.module.scss';

function CanvasLayers({ fluidColor, isAbout, mainRef }) {
  return (
    <>
      <Canvas
        gl={{
          pixelRatio: 0.5,
          outputColorSpace: isAbout === false ? THREE.LinearSRGBColorSpace : THREE.SRGBColorSpace,
        }}
        style={{ zIndex: 0 }}
        resize={{ debounce: { resize: 0, scroll: 0 }, polyfill: undefined }}
        className={styles.canvasContainer}
        dpr={[0.5, 1.5]}
      >
        <View.Port />
      </Canvas>
      <Canvas
        id="fluidCanvas"
        frameloop="demand"
        flat
        gl={{
          antialias: false,
          stencil: false,
          depth: false,
          pixelRatio: 0.1,
        }}
        style={{ mixBlendMode: 'difference', background: 'black' }}
        linear
        className={styles.canvasContainer}
        eventSource={mainRef.current}
        dpr={[0.1, 0.5]}
      >
        <EffectComposer>
          <Fluid fluidColor={fluidColor} mainRef={mainRef} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default CanvasLayers;
