/*function App() {
  return (
    <>
      <h1 className="text-4xl text-red-600 font-bold">Hello world</h1>
    </>
  );
}

export default App; 
*/

import DataImage from "./data";
import { listTools, listProyek } from "./data";

import { useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { initParticlesEngine } from "@tsparticles/react";
import { TypeAnimation } from 'react-type-animation';
import './components/PixelTransition.css';
import PixelTransition from './components/PixelTransition';
import VariableProximity from "./components/VariableProximity";
import { useRef } from 'react';
import BlurProximityText from "./components/BlurProximityText";
import ScrollVelocity from './components/ScrollVelocity';
import PreLoaderTyping from "./components/PreLoaderTyping";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedDone, setTypedDone] = useState(false); // teks ketik selesai
  const [hideText, setHideText] = useState(false); // untuk memicu animasi debu
  const [showHero, setShowHero] = useState(false);       // untuk hero konten
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };


  useEffect(() => {
    console.log("Status loading:", loading);
  }, [loading]);

  // Inisialisasi Particles dan data lainnya
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Simulasikan inisialisasi Particles
        await initParticlesEngine(async (engine) => {
          await loadFull(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };
    loadContent();
  }, []);

  /* useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); */

  // Fallback timeout sebagai cadangan


  useEffect(() => {
    if (typedDone) {
      const timer = setTimeout(() => setHideText(true), 500);
      return () => clearTimeout(timer);
    }
  }, [typedDone]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Fallback: Memaksa preloader hilang");
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);



  return (


    <div className="min-h-screen relative"
      style={{ background: loading ? "#1e293b" : "transparent" }}
    >
      <Navbar showHero={showHero} />
      {loading ? (
        <PreLoaderTyping onFinish={() => setLoading(false)} />
      ) : !showHero ? (
        //welcome screen
        // animasi  + debu
        <div className="text-center flex items-center justify-center h-screen">


          {!typedDone ? (
            <TypeAnimation
              sequence={[
                'Welcome To My Portfolio 🚀',
                1000,
                () => setTypedDone(true), // setelah ketik selesai
              ]}
              speed={50}
              cursor={false}
              repeat={0}
              wrapper="span"
              className="text-4xl font-bold"
            />
          ) : (
            <h1
              className={`text-4xl font-bold ${hideText ? "dust-out" : ""}`}
              onAnimationEnd={() => setShowHero(true)} // setelah debu selesai, muncul hero
            >
              Welcome To My Portfolio 🚀
            </h1>
          )}

        </div>

      ) : (

        // HERO & KONTEN UTAMA 


        <div className="relative min-h-screen text-center mt-20">
          {/* Partikel di belakang */}
          {init && <Particles
            id="tsparticles"
            options={{
              background: { color: "#0f172a" },
              particles: {
                number: { value: 60 },
                color: { value: ["#8b5cf6", "#3b82f6"] },
                links: { enable: true, color: "#a78bfa" },
                move: { enable: true, speed: 1.5 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 4 } },
              },
              interactivity: { events: { onHover: { enable: true, mode: "repulse" } } }
            }}
            className="absolute top-0 left-0 w-full h-full -z-10"
          />}




          {/* Konten Utama */}
          <div className="relative z-10">
            {/* HERO */}
            <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
              <div className="animate__animated animate__fadeInUp animate__delay-3s text-left">
                <div className="flex items-center gap-3 mb-6 bg-slate-300 w-fit p-4 rounded-2xl">
                  <div
                    ref={containerRef}
                    style={{ position: 'relative' }}
                  >
                  </div>
                  <img src={DataImage.HeroImage}
                    alt="Hero Image"
                    className="w-10 rounded-md"
                    loading="lazy"
                  />
                  <q className="text-black font-bold">
                    <VariableProximity
                      label={'Pantang Menyerah Sebelum Mencoba.'}
                      className={'variable-proximity-demo'}
                      fromFontVariationSettings="'wght' 800, 'opsz' 9"
                      toFontVariationSettings="'wght' 1000, 'opsz' 40"
                      containerRef={containerRef}
                      radius={100}
                      falloff='linear'
                    />


                  </q>
                </div>


                <h1 className="text-5xl leading-tight font-bold mb-6">
                  <BlurProximityText
                    text="Hi, Saya Mohammad Rizqy Ramadhan"
                    containerRef={containerRef}
                    delay={200}
                    className="inline-block"
                  />
                </h1>


                <p className="text-base/loose mb-6 opacity-90 font-semibold">

                  Saya Mohammad Rizqy Ramadhan, lulusan
                  SMK Bhakti Anindya jurusan Multimedia
                  tahun 2019. Saat ini saya aktif mencari
                  pekerjaan dan memiliki keahlian dalam
                  desain grafis serta penguasaan Microsoft
                  Office.  Saya mempunyai ketertarikkan dalam bidang Programming dan Designer. terutama pada pembuatan Website dan Desain UI/UX.
                  Saya baru selesai mengikuti pelatihan web progamming yang di selenggaran oleh Pemerintah Kota Tangerang melalui blk
                  Kota Tangerang dan sudah berkompeten mempunyai sertifikasi Badan Nasional Bersertifikasi Profesi.

                </p>
                <div className="flex items-center sm:gap-4 gap-2">
                  <a
                    href={`${import.meta.env.BASE_URL}cvmohammadrizqyramadhan.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                    Lihat CV <i className="ri-eye-line ri-lg"></i>
                  </a>

                  <a href={`${import.meta.env.BASE_URL}cvmohammadrizqyramadhan.pdf`}
                    download="cvmohammadrizqyramadhan.pdf"
                    className="bg-blue-500 p-4 rounded-2xl hover:bg-slate-400">
                    Download CV <i className="ri-download-line ri-lg"></i></a>

                  <a href={`${import.meta.env.BASE_URL}sertifikat.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-300 p-4 rounded-2xl hover:bg-blue-300 text-black">
                    Lihat Sertifikat <i className="ri-arrow-down-line ri-lg text-black"></i></a>
                </div>

              </div>
              <div className="w-full flex justify-end items-center pr-4 md:pr-8 h-[500px] md:ml-auto  animate__animated animate__zoomIn animate__delay-4s" loading="lazy">
                <PixelTransition
                  firstContent={
                    <img
                      src={DataImage.HeroImage}
                      alt="Hero Image"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <img
                      src={DataImage.SecondImage}
                      alt="Second Image"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  gridSize={12}
                  pixelColor='#ffffff'
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                  style={{ width: "450px", height: "450px" }}
                />

              </div>
            </div>
            {/* tentang */}
            <div className="tentang mt-32 py-10" id="tentang">
              <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-300 rounded-lg" data-aos="fade-up"
                data-aos-duration="1000" >
                <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
                <p className="text-base/loose mb-10 text-black">
                  Hi perkenalkan saya Mohammad Rizqy Ramadhan, seorang Junior Front End Developer Dan Designer
                  untuk UI/UX Design maupun Product Digital, saya percaya bahwa desain dan
                  fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya
                  kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna
                  yang optimal.
                </p>
                <div className="flex items-center justify-between">
                  <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block
            hidden" loading="lazy" />
                  <div className="flex items-center gap-6">
                    <div>
                      <h1 className="text-4xl mb-1 text-black">
                        5<span className="text-blue-500">+</span>
                      </h1>
                      <p className="text-black">Proyek Selesai</p>
                    </div>
                    <div>
                      <h1 className="text-4xl mb-1 text-black">
                        3<span className="text-violet-500"></span>
                      </h1>
                      <p className="text-black">Bulan Pengalaman</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tools mt-32">
                <h1 className="text-4xl/snug font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000">Tools yang dipakai</h1>
                <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-left opacity-50"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang
                  biasa saya pakai untuk pembuatan Website ataupun Desain </p>
                <div className="mt-14">
                  <ScrollVelocity
                    velocity={70}
                    numCopies={3}
                    className=""
                  >
                    {listTools.map(tool => (
                      <div key={tool.id} className="flex flex-col items-center min-w-[140px]">
                        <div className="w-24 h-24 flex items-center justify-center">
                          <img
                            src={tool.gambar}
                            alt={tool.nama}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="mt-2 text-white font-semibold">{tool.nama}</p>
                      </div>
                    ))}
                  </ScrollVelocity>
                </div>
              </div>
            </div>
            {/* tentang */}

            {/* proyek */}
            <div className="proyek mt-32 py-10" id="proyek">
              <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up"
                data-aos-duration="1000">Proyek</h1>
              <p className="text-base/loose text-center opacity-50" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang
                telah saya buat.</p>
              <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listProyek.map((proyek) => (
                  <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay={proyek.dad}>
                    <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                    <div>
                      <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                      <p className="text-base/loose mb-4">{proyek.desk}</p>
                      <div className="flex flex-wrap gap-2">
                        {proyek.tools.map((tool, index) => (
                          <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                            key={index}>{tool}</p>
                        ))}
                      </div>
                      <div className="mt-8 text-center">
                        <a href={proyek.link} target="_blank" rel="noopener noreferrer"
                          className="bg-violet-700 p-3 rounded-lg block border border-zinc-600
                   hover:bg-violet-600">Lihat Website </a>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            {/* proyek */}

            {/* Kontak */}
            <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
              <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up"
                data-aos-duration="1000" >Kontak</h1>
              <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300">Mari Terhubung Dengan Saya</p>
              <form action="https://formsubmit.co/ramadhanrizqi53@gmail.com" method="POST"
                className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="500">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-left">Nama Lengkap</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama..." className="border
                 border-zinc-500 p-2 rounded-md " required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-left">Email</label>
                    <input type="email" name="email " placeholder="Masukkan email..." className="border
                 border-zinc-500 p-2 rounded-md " required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pesan" className="font-semibold text-left">Pesan</label>
                    <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border
                 border-zinc-500 p-2 rounded-md" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600
                   hover:bg-violet-600">Kirim Pesan</button>
                  </div>
                </div>
              </form>

            </div>
            {/* Kontak */}
          </div>

        </div>

      )}

      <Footer showHero={showHero} />

    </div>


  );

}

export default App;


