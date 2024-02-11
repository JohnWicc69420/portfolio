"use client";
import React, { useState, useEffect } from "react";
import "./CursorCircle.css";

const CursorCircle = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor-circle"
      style={{
        top: cursorPos.y + "px",
        left: cursorPos.x + "px",
      }}
    ></div>
  );
};

export default CursorCircle;
