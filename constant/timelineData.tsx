// Bir yazılım projesinde ilerleme sürecim için Timeline içerikleri

export const timelineData = [
  {
    id: "timeline-1",
    title: "İhtiyaç Analizi & Planlama",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Proje başlamadan önce müşteri/ekip ile detaylı bir görüşme yaparım ve{" "}
          <strong>proje gereksinimlerini</strong> netleştiririm. Kullanıcı
          hikayeleri, hedefler ve öncelikler belirlenir.{" "}
          <strong>Trello, Notion</strong> gibi araçlarla iş planı ve yol
          haritası çıkarılır.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-2",
    title: "Tasarım & Mockup",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Arayüz için <strong>Wireframe</strong> ve <strong>Mockup</strong>{" "}
          hazırlanır. Eğer varsa UI/UX ekibiyle iş birliği yapılır, yoksa{" "}
          <strong>Figma</strong> ile temel tasarımı kendim oluştururum. Renk
          paleti, tipografi ve component yapısı belirlenir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-3",
    title: "Frontend Kurulumu",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Projenin ilk adımında <strong>React</strong> veya{" "}
          <strong>Next.js</strong> kurulumu yapılır.{" "}
          <strong>Tailwind CSS</strong> ile hızlı arayüz geliştirme başlar.
          Component yapısı ve sayfa mimarisi planlanır. UI kütüphaneleri (
          <strong>shadcn/ui</strong>, <strong>PrimeReact</strong>) entegre
          edilir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-4",
    title: "Backend Kurulumu",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Sunucu tarafı için <strong>Node.js</strong> ve{" "}
          <strong>Express.js</strong> yapılandırılır. API endpointleri,
          middleware ve hata yönetimi kurulur. Gerekirse{" "}
          <strong>TypeScript</strong> ile tip desteği eklenir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-5",
    title: "Veritabanı & ORM Entegrasyonu",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          <strong>MongoDB</strong> veya <strong>PostgreSQL</strong> seçilerek
          veri modeli tasarlanır. <strong>Prisma</strong> veya{" "}
          <strong>Drizzle ORM</strong> ile veritabanı bağlantısı kurulur.
          Migration ve seed işlemleri yapılır, veri ilişkileri modellenir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-6",
    title: "Kimlik Doğrulama & Güvenlik",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Kullanıcı yönetimi için <strong>JWT</strong>, <strong>Clerk</strong>{" "}
          veya <strong>Better Auth</strong> gibi kimlik doğrulama sistemleri
          entegre edilir. Yetkilendirme, şifreleme ve güvenli oturum yönetimi
          sağlanır.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-7",
    title: "State & Veri Yönetimi",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          <strong>Redux</strong> veya context API ile global state yönetimi
          oluşturulur. API çağrıları, veri önbellekleme ve asenkron işlemler
          için uygun yapılar kurulur.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-8",
    title: "Test & Kalite Kontrol",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          <strong>Jest</strong>, <strong>React Testing Library</strong> gibi
          araçlarla birim ve entegrasyon testleri yazılır. Manuel ve otomatik
          testlerle uygulamanın kararlılığı ve güvenliği kontrol edilir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-9",
    title: "Deploy & Sürümleme",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Proje tamamlandığında <strong>Vercel</strong>,{" "}
          <strong>Netlify</strong> veya kendi sunucuma deployment yaparım. Sürüm
          yönetimi için <strong>Git</strong> ve <strong>GitHub</strong>{" "}
          kullanılır, CI/CD süreçleri varsa entegre edilir.
        </p>
      </div>
    ),
  },
  {
    id: "timeline-10",
    title: "Dökümantasyon & Teslim",
    content: (
      <div className=" text-base max-w-2xl">
        <p>
          Son aşamada proje için <strong>README</strong>, API dökümantasyonu,
          kullanım kılavuzları hazırlanır. Müşteriye/ekibe teslim edilir ve geri
          bildirim aşaması başlatılır.
        </p>
      </div>
    ),
  },
];
