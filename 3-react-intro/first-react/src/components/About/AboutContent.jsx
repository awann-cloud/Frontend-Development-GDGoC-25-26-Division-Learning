const AboutContent = () => {
  return (
    <div>
      <h2 className="section-title mb-8">
        More About Me &<br />
        <span className="gradient-text">What I Do.</span>
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        Saya adalah mahasiswa Informatika di Universitas Sriwijaya yang fokus
        menciptakan pengalaman web yang tidak hanya menarik secara visual,
        tetapi juga fungsional dan performa tinggi.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed mb-12">
        Dengan kombinasi design thinking dan technical expertise, saya membangun
        produk digital yang resonan dengan users dan mencapai business goals.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-5xl font-bold gradient-text mb-2">5+</p>
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Projects Completed
          </p>
        </div>
        <div>
          <p className="text-5xl font-bold gradient-text mb-2">2+</p>
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Years Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
