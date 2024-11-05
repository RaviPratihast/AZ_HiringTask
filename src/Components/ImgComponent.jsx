const ImgComponent = ({ src, alt = "Image", className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[36px] h-[36px] rounded-lg border-none ${className}`}
    />
  );
};

export { ImgComponent };
