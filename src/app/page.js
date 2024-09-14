import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import LotteHero from "./components/client/LotteHero";
export default function Entry() {
  return (
    <>
      <div className="flex relative h-screen flex-col">
        <Navbar />
        <Main><LotteHero /></Main>
      </div>
      <Footer /></>
  )
}
