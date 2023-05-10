import Navigation from "@/components/layouts/navigation";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header/>
      <Navigation/>

      <main>
        {children}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
