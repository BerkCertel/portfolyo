import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className=" md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Start Building
          </h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button className=" transition-all duration-500">
              Profilimi Görüntüle
            </Button>
            <Button
              variant="ghost"
              className="border transition-all duration-500"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
