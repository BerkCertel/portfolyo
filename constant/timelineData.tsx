"use client";
import SplitText from "@/components/SplitText";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  id: string;
}

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    title: "İhtiyaç Analizi & Planlama",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Proje başlamadan önce müşteri/ekip ile detaylı bir görüşme yaparım ve proje gereksinimlerini netleştiririm. Kullanıcı hikayeleri, hedefler ve öncelikler belirlenir. Trello, Notion gibi araçlarla iş planı ve yol haritası çıkarılır."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "2",
    title: "Tasarım & Mockup",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Arayüz için Wireframe ve Mockup hazırlanır. Eğer varsa UI/UX ekibiyle iş birliği yapılır, yoksa Figma ile temel tasarımı kendim oluştururum. Renk paleti, tipografi ve component yapısı belirlenir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "3",
    title: "Frontend Kurulumu",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Projenin ilk adımında React veya Next.js kurulumu yapılır. Tailwind CSS ile hızlı arayüz geliştirme başlar. Component yapısı ve sayfa mimarisi planlanır. UI kütüphaneleri (shadcn/ui, PrimeReact) entegre edilir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "4",
    title: "Backend Kurulumu",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Sunucu tarafı için Node.js ve Express.js yapılandırılır. API endpointleri, middleware ve hata yönetimi kurulur. Gerekirse TypeScript ile tip desteği eklenir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "5",
    title: "Veritabanı & ORM Entegrasyonu",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="MongoDB veya PostgreSQL seçilerek veri modeli tasarlanır. Prisma veya Drizzle ORM ile veritabanı bağlantısı kurulur. Migration ve seed işlemleri yapılır, veri ilişkileri modellenir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "6",
    title: "Kimlik Doğrulama & Güvenlik",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Kullanıcı yönetimi için JWT, Clerk veya Better Auth gibi kimlik doğrulama sistemleri entegre edilir. Yetkilendirme, şifreleme ve güvenli oturum yönetimi sağlanır."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "7",
    title: "State & Veri Yönetimi",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Redux veya context API ile global state yönetimi oluşturulur. API çağrıları, veri önbellekleme ve asenkron işlemler için uygun yapılar kurulur."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "8",
    title: "Test & Kalite Kontrol",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Jest, React Testing Library gibi araçlarla birim ve entegrasyon testleri yazılır. Manuel ve otomatik testlerle uygulamanın kararlılığı ve güvenliği kontrol edilir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "9",
    title: "Deploy & Sürümleme",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Proje tamamlandığında Vercel, Netlify veya kendi sunucuma deployment yaparım. Sürüm yönetimi için Git ve GitHub kullanılır, CI/CD süreçleri varsa entegre edilir."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
  {
    id: "10",
    title: "Dökümantasyon & Teslim",
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text="Son aşamada proje için README, API dökümantasyonu, kullanım kılavuzları hazırlanır. Müşteriye/ekibe teslim edilir ve geri bildirim aşaması başlatılır."
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  },
];

// Örnek kullanım (sayfa içinde):
// <Timeline data={timelineData} />
