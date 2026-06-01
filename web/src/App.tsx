import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import FilterSection from "./components/FilterSection";
import FlashcardsSection from "./components/FlashcardsSection";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  // Estado utilizado para renderizar novamente o componente atualizando dos flashcards
  const [handleDataOperation, setHandleDataOperation] = useState<"add" | "update" | "delete" | "">("");

  return (
    <Layout>
      <Header setHandleDataOperation={setHandleDataOperation} />

      <main className="h-screen">
        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FlashcardsSection
          selectedCategory={selectedCategory}
          handleDataOperation={handleDataOperation}
          setHandleDataOperation={setHandleDataOperation}
        />
      </main>
    </Layout>
  );
}

export default App;
