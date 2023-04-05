const CarouselCardSmall = ({imageUrl, i, activeIndex}) => {
    return (
        <li 
            data-target="#carousel-example-1" 
            data-slide-to={0} 
            className={ i == activeIndex ? 'active' : ''}
            >
            <img
                className="d-block w-100 img-fluid"
                src={imageUrl}
                alt=""
            />
        </li>
    )
}

export default CarouselCardSmall;