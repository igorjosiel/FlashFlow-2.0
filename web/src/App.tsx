import Header from "./components/Header";
import Layout from "./components/Layout";
import FilterSection from "./components/FilterSection";
import blackAndWhiteIcon from "./assets/flashcard-black-and-white-icon.svg";
import Button from "./components/Button";

function App() {
  return (
    <Layout>
      <Header />

      <main>
        <FilterSection />

        <section className="flex flex-col gap-4 items-center mt-24">
          <img src={blackAndWhiteIcon} alt="Ícone do Flash Flow em preto e branco."></img>
          <p className="font-inter font-normal text-[14px] leading-5 text-surface-light-300 text-center">
            Você ainda não possui flashcards.<br></br> Que tal criar um para começar?
          </p>
          
          <Button>Novo Flashcard</Button>
        </section>
      </main>
    </Layout>
  );
}

export default App;
