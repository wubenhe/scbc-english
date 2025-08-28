import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import ChurchFilmsSection from "@/components/ChurchFilmsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LiveStreamSection />
        <ChurchFilmsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
