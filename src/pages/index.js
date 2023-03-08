import { useSelector } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderTwelve } from "../components/HeroSlider";
import { ImageSliderTwo } from "../components/ImageSlider";
import { ConceptContent } from "../components/HomeContent";
// import { ProductTab } from "../components/ProductTab";
// import { ImageCta } from "../components/Cta";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import imageSliderData from "../data/image-sliders/image-slider-one.json";
// import imageCtaData from "../data/image-cta/image-cta-one.json";

const Home = () => {
  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, "decor", "new", 9);
  const popularProducts = getProducts(products, "decor", "popular", 9);
  const saleProducts = getProducts(products, "decor", "sale", 9);

  return (
    <LayoutOne aboutOverlay={false}>
      {/* changed to concept page */}

      {/* hero slider */}
      <HeroSliderTwelve
            sliderData={heroSliderData}
            spaceBottomClass="space-mb--r130"
       />
      {/* home content */}
      <ConceptContent />
      {/* image slider */}
      <ImageSliderTwo imageSliderData={imageSliderData} />

    </LayoutOne>
  );
};

export default Home;
