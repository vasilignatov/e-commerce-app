import CategoriesShop from './CategoriesShop.js';
import LastAddedProducts from '../Common/LastAddedProducts.js';
import AllTitleBox from '../Common/AllTitleBox.js';
import LatestBlog from './LatestBlog.js';

const HomePage = () => {
   return (
      <>
         <AllTitleBox title='Home'/>
         <CategoriesShop />
         <LastAddedProducts />
         <LatestBlog />
      </>
   )
}

export default HomePage;