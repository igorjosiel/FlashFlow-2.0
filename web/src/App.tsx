import Header from "./components/Header";
import Layout from "./components/Layout";
import FilterSection from "./components/FilterSection";
import FlashcardsSection from "./components/FlashcardsSection";


function App() {
  return (
    <Layout>
      <Header />

      <main>
        <FilterSection />
        <FlashcardsSection />
      </main>
    </Layout>
  );
}

export default App;
