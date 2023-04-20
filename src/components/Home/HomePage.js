import CategoriesShop from './CategoriesShop.js';
import LastAddedProducts from '../Common/LastAddedProducts.js';
import AllTitleBox from '../Common/AllTitleBox.js';
import LatestBlog from './LatestBlog.js';
import InstaFeedCarousel from '../Common/InstaFeedCarousel/InstaFeedCarousel.js';

const HomePage = () => {
   return (
      <>
         <AllTitleBox title='Home'/>
         <InstaFeedCarousel />
         <CategoriesShop />
         <LastAddedProducts />
         <LatestBlog />
      </>
   )
}

export default HomePage;