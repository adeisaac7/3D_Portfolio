// Simplify BallCanvas to always render the provided icon as an <img> to avoid 3D rendering and Float animation.
const BallCanvas = ({ icon }) => {
  return (
    <img
      src={icon}
      alt="Technology icon"
      className="w-[70px] h-[70px] opacity-90 object-contain"
      loading="lazy"
    />
  );
};

export default BallCanvas;
