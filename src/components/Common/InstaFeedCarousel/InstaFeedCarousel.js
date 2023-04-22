import React from 'react';
import './InstaFeedCarousel.scss';

const slides = [
    {
        title: "Jackets",
        subtitle: "",
        description: "Jeans, lether and many more",
        image: "https://ik.imagekit.io/8brpz6ecl/e-commerce-react/Carousel/santosh-verma-i49yJtWD57w-unsplash.jpg?updatedAt=1682153520393"
    },
    {
        title: "Jewelry",
        subtitle: "",
        description: "Necklace, rings, braclet and many more",
        image: "https://ik.imagekit.io/8brpz6ecl/e-commerce-react/Carousel/sirio-HRwNd7tTqDM-unsplash.jpg?updatedAt=1682153510683"
    },
    {
        title: "Accessories",
        subtitle: "",
        description: "Glasses, whatches, phone cases and headphones",
        image: "https://ik.imagekit.io/8brpz6ecl/e-commerce-react/Carousel/vadim-sherbakov-tCICLJ5ktBE-unsplash.jpg?updatedAt=1682153511107"
    },
    {
        title: "Shoes",
        subtitle: "",
        description: "Snickers",
        image: "https://ik.imagekit.io/8brpz6ecl/e-commerce-react/Carousel/christian-lucas-dteSLOhELtw-unsplash.jpg?updatedAt=1682153510769"
    },
    {
        title: "Suits",
        subtitle: "",
        description: "",
        image: "https://ik.imagekit.io/8brpz6ecl/e-commerce-react/Carousel/andrew-wise-IhZhP6AyVyY-unsplash.jpg?updatedAt=1682153510558"
    }
];

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideBackground"
            // style={{
            //     backgroundImage: `url('${slide.image}')`
            // }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

const InstaFeed = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className='insta-feed-carousel'>
            <div className="slides">
                <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
        </div>
    );
}

export default InstaFeed;
