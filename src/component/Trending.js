import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Trending = ({ blogs }) => {
    console.log(blogs);
    const option={
       nav:true,
       loop:4,
       margin:10,
       responsive:{
        0:{
            items:1,
        },
        400:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }

       }
    }
    return (
        <>
            <div>
                <div className='blog-heading text-start py-2 mb-4'>Trending</div>

            </div>
            <OwlCarousel className='owl-theme' {...option}>

                {
                    blogs?.map((item) => (
                        <div className='item px-2 ' key={item.id}>

                            <Link to={`/detail/${item.id}`}>
                                <div className='trending-image-position'>
                                    <div className='trending-img-size'>
                                        <img src={item.imgUrl} alt={item.title}
                                            className='trending-img-relative'
                                        />
                                    </div>
                                    <div className='trending-img-absolute'></div>
                                    <div className='trending-img-absolute-1'>
                                        <span className='text-white' >{item.title}</span>
                                        <div className='trending-meta-info'>
                                            {item.author}-{item.timestamp.toDate().toDateString()}
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))
                }

            </OwlCarousel>


        </>
    )
}

export default Trending