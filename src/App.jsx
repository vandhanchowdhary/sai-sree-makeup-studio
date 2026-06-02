import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileActionBar from "./components/MobileActionBar";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen font-[Poppins] bg-[#F8F5EF]">
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <WhatsAppButton />
      <MobileActionBar />
      <Footer />
    </div>
  );
}

export default App;
