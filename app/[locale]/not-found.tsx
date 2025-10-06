import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { FaRegSadTear } from "react-icons/fa";

function NotFoundPage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* İkon ile başlık */}
      <FaRegSadTear className="text-6xl text-gray-500 mb-4" />

      {/* Ana sayfaya yönlendirme */}
      <Link href="/">{t("warningText")}</Link>
    </div>
  );
}

export default NotFoundPage;
