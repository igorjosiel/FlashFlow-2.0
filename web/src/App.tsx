import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import FilterSection from "./components/FilterSection";
import FlashcardsSection from "./components/FlashcardsSection";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Layout>
      <Header />

      <main>
        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FlashcardsSection selectedCategory={selectedCategory} />
      </main>
    </Layout>
  );
}

export default App;
