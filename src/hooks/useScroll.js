import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';

function useScroll(callback) {
  const [lenis] = useStore(useShallow((state) => [state.lenis]));

  useIsomorphicLayoutEffect(() => {
    if (!lenis) return undefined;
    lenis.on('scroll', callback);
    lenis.emit();

    return () => {
      lenis.off('scroll', callback);
    };
  }, [lenis, callback]);
}
export default useScroll;
