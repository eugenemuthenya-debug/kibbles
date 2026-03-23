import React from 'react'
const slide =()=>{
    return (
        <div className='row'>
         <div class="col-md-12">
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    
                    <div class="carousel-inner">
                        
                        <div class="carousel-item active">
                            <img src="/images/image1dog.jpeg" alt="slide 1" class="w-100" height="400px"/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/bedroom 2.jpg" alt="Slide 2" class="w-100" height="400px"/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/backyard.jpg" alt="Slide 3" class="w-100" height="400px"/>

                        </div>

                    </div>
                   
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev ">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>

            </div><br/>


    </div>
    
  )

}

 export default slide
 


