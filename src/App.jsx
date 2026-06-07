import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileActionBar from "./components/MobileActionBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./components/ScrollToTop";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen font-[Poppins] bg-[#F8F5EF]">
      <ScrollToTop />

      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <WhatsAppButton />
      <MobileActionBar />

      <Footer />

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
