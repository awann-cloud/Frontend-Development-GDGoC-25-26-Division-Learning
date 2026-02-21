import AboutContent from "../components/About/AboutContent";
import CurrentlyLearning from "../components/About/CurrentlyLearning";
import Expertise from "../components/About/Expertise";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-black/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AboutContent />

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Tech Stack & Expertise
            </h3>
            <Expertise />
            <CurrentlyLearning />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
