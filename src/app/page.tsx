import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <Carousel />
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <div className="w-full overflow-auto">
          <Carousel />
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <div className="w-full overflow-auto">
          <Carousel />
        </div>
        <Footer />
      </main>
    </>
  );
}
