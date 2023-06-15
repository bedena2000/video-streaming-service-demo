import React, { useState, useEffect } from "react";

const useHeight = () => {
  const [windowHeigh, setWindowHeight] = useState(0);
  const [isRender, setIsRender] = useState(false);
  window.addEventListener("scroll", (event) => {
    setWindowHeight(window.scrollY);
  });

  return [windowHeigh];
};

export default useHeight;
