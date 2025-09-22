import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Metrics from "@/components/Metrics";
import Areas from "@/components/Areas";
import Servicos from "@/components/ServiceKey";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Metrics></Metrics>
      <Areas></Areas>
      <Servicos></Servicos>
      <Metrics></Metrics>
    </main>
  );
}
