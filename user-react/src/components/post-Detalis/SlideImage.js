import React from 'react';
import Avatare from "../../Image/avatar.png";
import "./SlideImage.scss"
import Card from '../card/card';

export default function SlideImage({updateState}) {
    var elements = document.getElementsByClassName("container-Item");
    function clossCommponint()
    {
        document.getElementsByTagName("*")[0].style.overflow = "auto";
        for(var i = 0; i < elements.length; i++)
        {
            elements[i].style.display = "none";
            updateState(false)
        }
    }



  return (
    <>
        <div className="container-Item" id="media-modal">
            <div className="row row-item">
                <div className="col-lg-9 py-5 border border-bottom-0 border-start-0 border-top-0  item-Image">
                    <div className='ms-5'>
                        <span className='btn' onClick={clossCommponint}>
                            <i className="fa-solid fa-xmark fa-2x text-white"></i>
                        </span>
                    </div>
                    <div id="carouselExample" className="carousel slide ">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Avatare} className="d-block mx-auto w-50" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Avatare} className="d-block mx-auto w-50" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Avatare} className="d-block mx-auto w-50" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='mt-2 d-flex align-items-center justify-content-around '>
                        <span className='btn d-flex align-items-center'>
                            <div className='infor-Icone me-2'>
                                <i className="fa-regular fa-comment mx-2"></i>
                            </div>
                            <span className='text-white'> 3 </span>
                        </span>
                        <span className='btn d-flex align-items-center'>
                            <div className='infor-Icone me-2'>
                                <i className="fa-solid fa-retweet mx-2"></i>
                            </div>
                            <span className='text-white'> 6 </span>
                        </span>
                        <span className='btn d-flex align-items-center'>
                            <div className='infor-Icone me-2'>
                                <i className="fa-regular fa-heart mx-2"></i>
                            </div>
                            <span className='text-white'> 8 </span>
                        </span>
                        <span className='btn infor-Icone'>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </span>
                    </div>
                </div>

                <div className="col-lg-3 bg-white">
                    <div className='vh-100 overflow-y-scroll'>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>

      
    </>
  );
}
