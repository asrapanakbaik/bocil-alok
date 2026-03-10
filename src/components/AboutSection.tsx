import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Sesuaikan dengan path kamu

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-12 p-10">
      
      {/* --- KIRI: BAGIAN STIKER API (KODE YANG TADI) --- */}
      <div className="relative group w-64 h-64 md:w-80 md:h-80">
        <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card border border-white/10 p-2 h-full">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-xl relative">
            
            {/* Api-api melayang */}
            <motion.span className="absolute bottom-5 left-5 text-4xl z-0" animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>🔥</motion.span>
            <motion.span className="absolute top-5 right-5 text-4xl z-0" animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>🔥</motion.span>

            {/* Emoji Utama */}
            <motion.span 
              className="text-8xl z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              👨‍💻
            </motion.span>
          </div>
        </div>
      </div>

      {/* --- KANAN: DATA DIRI KAMU (YANG SEMPAT "HILANG") --- */}
      <div className="max-w-xl text-center lg:text-left">
        <motion.h1 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          My <span className="text-black-500">Self</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-6"
        >
          Saya adalah seorang siswa dari MAN 1 Banda Aceh, 
          saya berasal dari kelas x-11,saya akan memperkenalkan hasil project 
          koding saya yang sudah saya buat ini. 
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-6"
        >
          Saya berasal dari Aceh, lebih tepatnya dari Aceh Besar. 
          Saya lahir pada tanggal 07-11-2009, tepat pada tahun ini saya sudah berumur 17 tahun.
          saya seorang siswa dari MAN 1 Banda Aceh, dan saya berasal dari kelas X-11.
          Terima Kasih
        </motion.p>

    
      </div>

    </section>
  );
}