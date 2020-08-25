import React, { useState, useEffect } from "react";

const FileLoader = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imgToLoad = new Image();
    imgToLoad.src = src;
    imgToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        transition: "opacity 1s linear",
        width: "90%",
      }}
      alt={alt}
    />
  );
});

export default FileLoader;
