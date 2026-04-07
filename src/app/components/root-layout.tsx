import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading-screen";

export function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleComplete} />}
      <div className={`min-h-screen bg-hultaj-cream font-['Inter',sans-serif] film-grain ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
