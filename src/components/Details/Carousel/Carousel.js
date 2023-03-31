import { useState } from 'react';
import { useContext } from 'react';

import CarouselCard from './CarouselCard.js';
import CarouselCardSmall from './Carousel/CarouselCardSmall.js';

import ProductContext from '../../contexts/ProductContext.js';



const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    function activeIndexHandler(e) {
        const target = e.target;
        if (target.dataset.slide == 'prev' || target.className == 'fa fa-angle-left') {
            activeIndex == 0
                ? setActiveIndex(product.images.length - 1)
                : setActiveIndex(activeIndex - 1)
        } else if (target.dataset.slide == 'next' || target.className == 'fa fa-angle-right') {
            activeIndex == product.images.length - 1
                ? setActiveIndex(0)
                : setActiveIndex(activeIndex + 1)
        }
    }

    return (
        <div className="col-xl-5 col-lg-5 col-md-6" >
            <div id="carousel-example-1" onClick={activeIndexHandler} className="single-product-slider carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {
                        isLoading
                            ? ''
                            : product.images.map((x, i) => <CarouselCard key={x} imageUrl={x} i={i} activeIndex={activeIndex} />)
                    }
                </div>

                <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>

                <ol className="carousel-indicators">
                    {
                        isLoading
                            ? ''
                            : product.images.map(i => <CarouselCardSmall key={i} imageUrl={i} activeIndex={activeIndex} />)
                    }
                </ol>
            </div>
        </div>
    )
}

export default Carousel;