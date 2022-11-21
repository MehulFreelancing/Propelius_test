import React from 'react';
import Slider from "react-slick";

const BannerSlider = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}>
                <button className="my_slider_arrow slide-arrow next-arrow"><svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 7.54501L1 7.54501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12.4545 14.0909L19 7.54546L12.4545 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> </button>
            </div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}>
                <button className="my_slider_arrow slide-arrow prev-arrow"><svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.08704 7.54532L19.0854 7.78476" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M7.71901 1.08707L1.08706 7.54488L7.54487 14.1768" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg> </button>
            </div>
        );
    }

    const banner_slider_setting = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        dots: false,
        slide: "div",
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const SliderItems = [
        {
            ItemName: 'Computers',
            Image: 'assets/image/slider1.png',
        },
        {
            ItemName: 'Phones & Tablets',
            Image: 'assets/image/slider2.png',
        },
        {
            ItemName: 'Gaming & VR',
            Image: 'assets/image/slider3.png',
        },
        {
            ItemName: 'Audio & Music',
            Image: 'assets/image/slider4.png',
        },
        {
            ItemName: 'Wearables',
            Image: 'assets/image/slider5.png',
        },
        {
            ItemName: 'Moniters',
            Image: 'assets/image/slider6.png',
        },
        {
            ItemName: 'Phones',
            Image: 'assets/image/slider5.png',
        },
    ]

    return (
        <div className="multiple-product-items">
            <Slider {...banner_slider_setting}>
                {
                    SliderItems.map((items, idx) => {
                        return (
                            <div className="product_slider_item" key={idx}>
                                <div className="product_slider_image">
                                    <div className="product_slider_image_text">
                                        <h3>{items.ItemName}</h3>
                                    </div>
                                    <div className="product_slider_imagebox">
                                        <img src={items.Image} alt="slider1" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider