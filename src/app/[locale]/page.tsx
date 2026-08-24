
import ClientsReviews from "./_components/clients-reviews";
import Deals from "./_components/deals-section";
import FeatureSection from "./_components/feature-section";
import Gategories from "./_components/gategories";
import InfoSection from "./_components/info-section";
import LatestNews from "./_components/latest-news";
import MainScreen from "./_components/main-screeen";
import Products from "./_components/products-main";


export default function page() {
  return (
    <div >
      <section className="w-full relative">
        <MainScreen />
      </section>
      <section >
        <FeatureSection />
      </section>
      <section>
        <Products/>
      </section>
      <Gategories/>
      <Deals/>
      <InfoSection/>
      <ClientsReviews/>
      <LatestNews/>
    </div>
  );
}
