import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const VotingSys = () => {
    return (
        <>

            <div class="container">
                <h1 style={{textAlign:'center',marginTop:'1.8em',fontSize:'3rem'}} id="text"><span id="orange">Your Voice,</span> <span id="white">Your Vote,</span> <span id="green">Your Power.</span></h1>
                <br /><br /><br />
                <div className="Logosec container">
                    <Swiper slidesPerView={4}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu6Cs39_ic9y1AWgiYwyuG_7CbB5AqsB5ow&usqp=CAU" />
                                <h2 style={{ textAlign: 'center' }}>BJP</h2>
                                <h3 style={{ textAlign: 'center' ,fontSize:'0.9rem' }}>Kailash Vijayvargiya</h3>
                                <br />
                                <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide><div><img src='https://m.media-amazon.com/images/I/51OzdnDHi2S._AC_UF894,1000_QL80_.jpg' />
                            <h2 style={{ textAlign: 'center' }}>INC</h2>
                            <h3 style={{ textAlign: 'center' }}>Rahul Ghandhi</h3>
                            <br />
                            <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button></div>
                            </SwiperSlide>

                        <SwiperSlide><div><img src='https://m.media-amazon.com/images/I/71ti6eXdZDL.jpg' />
                            <h2 style={{ textAlign: 'center' }}>BSP</h2>
                            <h3 style={{ textAlign: 'center' }}>Kumari Mayavati</h3>
                            <br />
                            <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button></div></SwiperSlide>

                        <SwiperSlide><div><img src='https://zeevector.com/wp-content/uploads/Aam-Aadmi-Party-Logo-PNG-Punjab.png' />
                            <h2 style={{ textAlign: 'center' }}>AAP</h2>
                            <h3 style={{ textAlign: 'center' }}>Anurag Yadav</h3>
                            <br />
                            <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button></div></SwiperSlide>

                        <SwiperSlide><div><img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Samajwadi_Party.png' />
                            <h2 style={{ textAlign: 'center' }}>SWP</h2>
                            <h3 style={{ textAlign: 'center' }}>Munmun Singh</h3>
                            <br />
                            <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button></div></SwiperSlide>

                        <SwiperSlide><div><img src='https://upload.wikimedia.org/wikipedia/commons/f/f6/NOTA_Option_Logo.svg' />
                            <h2 style={{ textAlign: 'center' }}>NOTA</h2>
                            <h3 style={{ textAlign: 'center' }}>...</h3>
                            <br />
                            <button style={{ border: '1px solid black',fontSize:'1.4rem',padding:'6px 30px',borderRadius:'5px',backgroundColor:'#ffc10736',marginLeft:'34px' ,cursor:'pointer'}}>Vote</button></div></SwiperSlide>

                        <br /><br /><br /><br />
                    </Swiper>
                    <br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default VotingSys