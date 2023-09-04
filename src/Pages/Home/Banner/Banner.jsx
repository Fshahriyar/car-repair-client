import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] mx-w-[1240px] mx-auto py-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img  src={banner1} className="w-full sm:w-full sm:h-auto rounded-xl" />
          <div className='absolute text-white text-center space-y-7 w-1/3 pl-12 h-full pt-16 ps-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div className='mx-w-[1240px] mx-auto'>
            <h1  className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        
        <div>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
       </div>

          <div className="absolute flex  transform -translate-y-1/2 justify-end right-5 bottom-1 gap-3">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full rounded-xl" />
          <div className='absolute text-white text-center space-y-7 w-1/3 pl-12 h-full pt-16 ps-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div>
            <h1  className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        
        <div>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
       </div>
          <div className="absolute flex  transform -translate-y-1/2 justify-end right-5 bottom-1 gap-3">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full rounded-xl" />
          <div className='absolute text-white text-center space-y-7 w-1/3 pl-12 h-full pt-16 ps-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div>
            <h1  className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        
        <div>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
       </div>
          <div className="absolute flex  transform -translate-y-1/2 justify-end right-5 bottom-1 gap-3">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full rounded-xl" />
          <div className='absolute text-white text-center space-y-7 w-1/3 pl-12 h-full pt-16 ps-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div>
            <h1  className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        
        <div>
            <button className="btn btn-error me-5">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
       </div>
          <div className="absolute flex  transform -translate-y-1/2 justify-end right-5 bottom-1 gap-3">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        
        </div>

      {/* gradient */}
       
     
      </div>
    );
};

export default Banner;