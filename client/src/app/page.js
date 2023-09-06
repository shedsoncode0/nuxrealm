import Image from "next/image";
import { Header } from "./components/main_components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-cover bg-center bg-no-repeat bg-[url('./assets/image2.png')]">
      
      <Header />
    </main>
  );
}
