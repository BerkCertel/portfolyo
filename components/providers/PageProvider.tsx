import React from "react";

function PageProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 transition-all duration-300 ">
      {children}
    </div>
  );
}

export default PageProvider;
