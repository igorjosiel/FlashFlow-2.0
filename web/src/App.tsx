import Header from "./components/Header";
import Layout from "./components/Layout";
import FilterSection from "./components/FilterSection";

function App() {
  return (
    <Layout>
      <Header />

      <main className="mt-10 flex justify-between items-center">
        <div className="flex-col gap-2">
          <span className="font-inter text-primary-color font-bold text-xs uppercase leading-[15.6px] tracking-[1.04px]">
            Painel de aprendizado
          </span>
          <h1 className="font-manrope font-extrabold text-[36px] leading-11.25 text-surface-dark w-xl">
            Domine tecnologia com foco total.
          </h1>
        </div>

        <FilterSection />
      </main>
    </Layout>
  );
}

export default App;
