const CarouselCard = (imageUrl) => {
    return (
        <div className="carousel-item">
            <img
                className="d-block w-100"
                src={imageUrl}
                alt="First slide"
            />
        </div>
    )
}

export default CarouselCard;