import { useState, useRef, useEffect } from 'react';

function useHover(props = false) {
  const [hovered, setHovered] = useState(props);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    ref.current.addEventListener('mouseenter', enter);
    ref.current.addEventListener('mouseleave', leave);
  }, []);

  return [hovered, ref];
}

export default useHover;
