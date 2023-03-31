const CarouselCard = ({imageUrl, i, activeIndex}) => {
    return (
        <div className={ i == activeIndex ? 'carousel-item active' : 'carousel-item'}>
            <img
                className="d-block w-100"
                src={imageUrl}
                alt="First slide"
            />
        </div>
    )
}

export default CarouselCard;