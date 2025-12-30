"use client";
import { useEffect, useRef } from "react";

const MaskBg = ({ children, scrollRef }) => {
  const containerRef = useRef(null);
  const maskBgRef = useRef(null);
  const dotRef = useRef(null);

  const rectRef = useRef(null);
  const rafRef = useRef(null);

  const moveDot = (x, y) => {
    if (!dotRef.current || !rectRef.current) return;

    const localX = x - rectRef.current.left;
    const localY = y - rectRef.current.top;

    dotRef.current.style.transform = `translate3d(${localX}px, ${localY}px, 0)`;
  };

  const onPointerMove = (e) => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      moveDot(e.clientX, e.clientY);
      rafRef.current = null;
    });
  };

  useEffect(() => {
    const maskBg = maskBgRef.current;
    if (!maskBg) return;

    let scrollEl = scrollRef?.current;
    if (!scrollRef?.current) {
      scrollEl = document.getElementById("main-scroll");
    }
    const updateRect = () => {
      rectRef.current = maskBg.getBoundingClientRect();
    };

    updateRect();

    containerRef.current.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    if (scrollEl) {
      scrollEl.addEventListener("scroll", updateRect, { passive: true });
    }

    containerRef.current.addEventListener("pointerenter", updateRect, {
      passive: true,
    });
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(containerRef.current);

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", updateRect);
      }
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (!containerRef.current) return;
      containerRef.current.removeEventListener("pointermove", onPointerMove);
      containerRef.current.removeEventListener("pointerenter", updateRect);
    };
  }, []);

  return (
    <div className="maskCont" ref={containerRef}>
      <div className="border_bar" />

      <div className="maskBg" ref={maskBgRef}>
        <span className="dot" ref={dotRef} />
      </div>

      <div className="border_bar" />
      {children}
    </div>
  );
};

export default MaskBg;
