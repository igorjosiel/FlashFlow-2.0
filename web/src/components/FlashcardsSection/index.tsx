import FlashcardsContent from "../FlashcardsContent";
import FlashcardsEmptyState from "../FlashcardsEmptyState";

function FlashcardsSection() {
    const condicao = true;

    return (
        <section className="mt-24">
            {condicao ? <FlashcardsContent /> : <FlashcardsEmptyState />}
        </section>
    );
}

export default FlashcardsSection;
