import React, {component} from "react";
import reactDom from "react-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";

function CarouselImage(){
        return(
            <Carousel className="CaruImg">
                <div>
                    <img src="https://www.hapi-live.com/libros/wp-content/uploads/2021/02/banner-de-papeleria.jpg"/>
                </div>
                <div>
                    <img src="https://liquidazona.com/wp-content/uploads/2019/06/JRBanner-14.jpg"/>
                </div>
                <div>
                    <img src="https://img.lovepik.com//back_pic/05/64/10/595b626cba5c02f.jpg_wh860.jpg"/>
                </div>
            </Carousel>
        );
};

export default CarouselImage;