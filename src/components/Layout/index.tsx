import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
