import SlidesShop from './SlidesShop.js';
import CategoriesShop from './CategoriesShop.js';
import FeaturedProducts from './FeaturedProducts.js';
import LatestBlog from './LatestBlog.js';
import Auth from '../Auth/Auth.js';

const Home = () => {
   return (
      <>
         {/* <Auth></Auth> */}
         {/* <SlidesShop /> */}
         <CategoriesShop />
         <FeaturedProducts />
         <LatestBlog />
      </>
   )
}

export default Home;