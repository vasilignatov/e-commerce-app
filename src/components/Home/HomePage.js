import SlidesShop from './SlidesShop.js';
import CategoriesShop from './CategoriesShop.js';
import FeaturedProducts from '../Common/FeaturedProducts.js';
import LatestBlog from './LatestBlog.js';

const HomePage = () => {
   return (
      <>
         {/* <SlidesShop /> */}
         <CategoriesShop />
         <FeaturedProducts />
         <LatestBlog />
      </>
   )
}

export default HomePage;