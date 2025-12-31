import React from "react";

// Lightweight placeholder to avoid loading the heavy 3D model on page load.
const ComputersCanvas = () => {
  // Invisible placeholder (keeps layout) — no label shown.
  return <div className="w-full h-full flex items-center justify-center bg-transparent" aria-hidden="true" />;
};

export default ComputersCanvas;
