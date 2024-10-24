"use client";
import { useEffect, useRef } from "react";

const MaskBg = ({ children }) => {
  const Container = useRef();
  const DotRef = useRef();

  const dotMove = (data, box) => {
    if (!DotRef.current) return;

    const TOP = box[0].top > 0 ? box[0].top : -box[0].top;

    DotRef.current.animate(
      {
        left: `${box[0].left + data.clientX || "0"}px`,
        top: `${TOP + data.clientY || "0"}px`,
      },
      { duration: 5000, fill: "forwards" }
    );
  };

  useEffect(() => {
    if (!Container.current) return;

    Container.current.addEventListener("mouseenter", (e) =>
      dotMove(e, Container.current.getClientRects())
    );
    Container.current.addEventListener("mousemove", (e) =>
      dotMove(e, Container.current.getClientRects())
    );

    Container.current.addEventListener("mouseleave", (e) =>
      dotMove(e, Container.current.getClientRects())
    );

    return () => {
      if (!Container.current) return;

      Container.current.removeEventListener("mouseenter", (e) =>
        dotMove(e, Container.current.getClientRects())
      );
      Container.current.removeEventListener("mousemove", (e) =>
        dotMove(e, Container.current.getClientRects())
      );
      Container.current.removeEventListener("mouseleave", (e) =>
        dotMove(e, Container.current.getClientRects())
      );
    };
  }, []);
  return (
    <div className="maskCont" ref={Container}>
      <div className="maskBg">
        <span className="dot" ref={DotRef}></span>
      </div>
      {children}
    </div>
  );
};

export default MaskBg;
