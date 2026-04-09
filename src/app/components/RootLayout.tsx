import { Outlet } from "react-router";
import { CartProvider } from "../context/CartContext";
import { Navbar } from "./Navbar";
import { CartDrawer } from "./CartDrawer";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
