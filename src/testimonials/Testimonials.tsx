import React from 'react';
import './Testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
const AVTR1 = require("../assets/avatar1.jpg");
const AVTR2 = require("../assets/avatar2.jpg");
const AVTR3 = require("../assets/avatar3.jpg");
const AVTR4 = require("../assets/avatar4.jpg");

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            {/* make it dynamic  */}
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVTR1} alt="" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <p className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dicta eaque
                        vero ea magnam optio aut molestias sequi, enim odit distinctio, a consequuntur
                        laudantium, non fugit quidem dolor sapiente magni.
                    </p>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVTR2} alt="" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dicta eaque
                        vero ea magnam optio aut molestias sequi, enim odit distinctio, a consequuntur
                        laudantium, non fugit quidem dolor sapiente magni.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVTR3} alt="" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dicta eaque
                        vero ea magnam optio aut molestias sequi, enim odit distinctio, a consequuntur
                        laudantium, non fugit quidem dolor sapiente magni.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={AVTR4} alt="" />
                    </div>
                    <h5 className='client__name'>Ernest Achiever</h5>
                    <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dicta eaque
                        vero ea magnam optio aut molestias sequi, enim odit distinctio, a consequuntur
                        laudantium, non fugit quidem dolor sapiente magni.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials