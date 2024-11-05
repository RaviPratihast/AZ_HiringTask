const ImgComponent = ({ src, alt = "Image", className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-8 h-8 rounded-lg border-none ${className}`}
    />
  );
};

export { ImgComponent };
