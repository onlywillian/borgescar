import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";
import Carousel from "@/components/Carousel";

const imagesLinks = [
  
]

export default function Home() {
  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <Carousel images={[
            { link: "https://www.carpixel.net/w/c0b40ba691f00b8b7ca36577cffe6187/aston-martin-vulcan-wallpaper-hd-33534.jpg" }, 
            { link: "https://www.carpixel.net/w/e0a91c4d24afbed6af0bda170a2aa17c/aston-martin-vulcan-wallpaper-hd-33535.jpg" },
            { link: "https://wallpaperaccess.com/full/1603533.jpg" }, 
          ]}/>
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos type={1}/>
        </div>
        <div className="w-full overflow-auto">
        <Carousel images={[
            { link: "https://cdn.motor1.com/images/mgl/BXXJAe/s1/2023-honda-civic-type-r-front-view.jpg" }, 
            { link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi45rPvH0pcpyRWIbEicFYb4KRZZJ_f86hrMFdU_t7RE4Q8pjjZPS18ufjuebq_s9a_d1ZtUJpizBms3XmIM6x1aoXgVW1-YXX0xEgKhXypjptYT7S35kTtfFlciVGdO48oj46go2bb-ARTMGJu3g1-4zZkhITpyiKXRpNJYx6ThtM2_r7UzOy5-CCh6g/s2560/honda-civic-type-r-accessorized%20%2815%29.jpg" },
            { link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKh1MeqEGjzi_2jhZ7geeZekXpCh2bDn1rT_2EpL6uOrLPY2WMH_qPLjMR_OkJQqQ3hMUMWFhX2kXI2FGlA0CmFEnS7UifqNaRFAZipydck0d49UGGkN_1Sb1Z4V9hRRZd5dnrrBqQzlWTMgiq22PVXWHewbeR17xAq_fLIWoYnvOMZPIHm0bVdn7NvA/s2560/honda-civic-type-r-accessorized%20%287%29.jpg" }, 
          ]}/>
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos type={2}/>
        </div>
        <div className="w-full overflow-auto">
        <Carousel images={[
            { link: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/ram_2500_rebel_crew_cab_7.jpg?quality=70&strip=info&w=1280&h=720&crop=1" }, 
            { link: "https://www.carpixel.net/w/dbaee37a1ca48887a319d45c0a513ea8/ram-2500-power-wagon-crew-cab-wallpaper-hd-38792.jpg" },
            { link: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/ram_2500_rebel_crew_cab_56_026f029706f60539.jpg" }, 
          ]}/>
        </div>
        <Footer />
      </main>
    </>
  );
}
