import React from 'react';
import { motion } from 'framer-motion';
// Import Swiper React components dan modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

export default function AboutSection() {
  // Data untuk isi carousel
  const aboutData = [
    {
      title: "Pendidikan",
      desc: "Saya adalah seorang siswa dari MAN 1 Banda Aceh, saat ini menempuh pendidikan di kelas X-11.",
      icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Asal Daerah",
      desc: "Asli dari Aceh, tepatnya menetap di Aceh Besar. Salam kenal dari Serambi Mekkah!",
      icon: <MapPin className="w-10 h-10 text-red-500" />,
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "Usia",
      desc: "Lahir pada 07-11-2009. Tepat pada tahun ini, saya sudah menginjak usia 17 tahun.",
      icon: <Calendar className="w-10 h-10 text-green-500" />,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Hobi & Misi",
      desc: "Saya sangat antusias memperkenalkan hasil project koding yang sudah saya bangun sendiri.",
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      gradient: "from-pink-500/10 to-rose-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kenali saya lebih dekat melalui kartu informasi di bawah ini. Geser untuk melihat detail lainnya!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Sisi Kiri: Deskripsi Teks */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Halo, saya Asyraf! 
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya seorang pelajar yang memiliki ketertarikan besar dalam dunia teknologi dan pengembangan web. 
              Portfolio ini adalah wadah bagi saya untuk mendokumentasikan perjalanan belajar koding saya 
              selama di sekolah.
            </p>
            <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <p className="italic text-muted-foreground">
                "Koding bukan hanya soal angka, tapi tentang bagaimana kita menciptakan solusi."
              </p>
            </div>
          </motion.div>

          {/* Sisi Kanan: Carousel Kartu (Effect Cards) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <div className="w-[280px] h-[380px] md:w-[350px] md:h-[450px]">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[EffectCards, Pagination, Autoplay]}
                className="mySwiper w-full h-full"
              >
                {aboutData.map((item, index) => (
                  <SwiperSlide 
                    key={index} 
                    className={`rounded-3xl border border-white/20 bg-gradient-to-br ${item.gradient} backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-8 text-center`}
                  >
                    <div className="mb-6 bg-background p-4 rounded-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CSS Khusus untuk merapikan tampilan Swiper */}
      <style>{`
        .swiper-slide {
          background-color: var(--background); /* Menghindari transparansi berlebih */
        }
        .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important; /* Warna biru primary */
        }
        .swiper-3d .swiper-slide-shadow {
          background: rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </section>
  );
}