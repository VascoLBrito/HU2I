import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Metrics from "@/components/Metrics";
import Areas from "@/components/Areas";
import Servicos from "@/components/ServiceKey";
import { Parceiros } from "@/components/Parceiros";
import { Newsletter } from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Metrics></Metrics>
      <Areas></Areas>
      <Servicos></Servicos>
      <Parceiros></Parceiros>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </main>
  );
}
