import MyServicesSection from "@/components/MyServices/MyServicesSection";
import PageProvider from "@/components/providers/PageProvider";
import React from "react";

function ServicesPage() {
  return (
    <PageProvider>
      <MyServicesSection />
    </PageProvider>
  );
}

export default ServicesPage;
