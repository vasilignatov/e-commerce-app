import SlidesShop from './SlidesShop.js';
import CategoriesShop from './CategoriesShop.js';
import FeaturedProducts from './FeaturedProducts.js';
import LatestBlog from './LatestBlog.js';

const Home = () => {
   return (
      <>
         {/* <SlidesShop /> */}
         <CategoriesShop />
         <FeaturedProducts />
         <LatestBlog />
      </>
   )
}

export default Home;