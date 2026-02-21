const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 grid-bg relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up opacity-0">
          <p className="text-gray-400 text-sm md:text-base mb-6 font-medium tracking-wider uppercase">
            Welcome to My Portfolio
          </p>
          <h1 className="hero-title mb-8">
            <span className="block">Hi, I'm Farrel —</span>
            <span className=" gradient-text">Front-End Developer</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Saya passionate tentang menciptakan website yang tidak hanya
            terlihat bagus, tapi juga memberikan pengalaman yang menyenangkan
            bagi users. Mahasiswa Informatika @ Universitas Sriwijaya
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#work"
              className="btn-primary px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="scroll-indicator mt-24">
          <svg
            className="w-6 h-6 mx-auto text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
