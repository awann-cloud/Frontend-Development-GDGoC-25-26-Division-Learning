import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Team from "@/components/Team/Team";
import Footer from "@/components/Footer";
import Learning from "@/components/Learning/Learning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Learning />
      <Footer />
    </div>
  );
};

export default Index;
