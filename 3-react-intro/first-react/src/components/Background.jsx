const Background = () => {
  return (
    <div
      className="cursor-dot hidden md:block fixed top-0 left-0 w-4 h-4 bg-[#667eea] rounded-full pointer-events-none z-[9999]"
      style="transform: translate(-50%, -50%); box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);"
    ></div>
  );
};

export default Background;
