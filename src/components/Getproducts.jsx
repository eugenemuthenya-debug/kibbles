import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer'



const GetProducts = () => {
  const [products, setProducts] = useState([])// empty array
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const img_url = "https://eugene.alwaysdata.net/static/images/"

  const getProducts = async () => {
    setLoading("Wait as we load products...")
    try {
      const response = await axios.get("https://eugene.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProducts(response.data)

    } catch (error) {
      setLoading("")
      setError(error.message)


    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <Navbar />
      
      <div>
         <div className='row mt-4 container-fluuid nav'>
         <div className="col-md-12">
                <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                            <img src="/images/image1dog.jpeg" alt="slide 1" className="d-block carousel_img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/imagedog2.jpeg" alt="Slide 2" className="d-block carousel_img"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/imagedog3.jpeg" alt="Slide 2" className="d-block carousel_img"/>
                        </div>
                       

                    </div>
                   
                    <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev ">
                        <span className="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
                        <span className="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>

            </div><br/>


    </div>
        
        
      </div>
      <div className='row mt-4 container-fluid'>
        <h1 className='mt-3 text-primary text-center'>Available products</h1>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-danger'>{error}</h5>

        {/* map over products and display them*/}
        {products.map((product) => (
          <div className='justify-content-center col-md-3'>
            <div className='card shadow p-4 text-center mb-4 card-margin form_deco'>
              <img src={img_url + product.product_photo} alt="" className='product_img mt-2' />
              <div className='card-body'>
                <h5 className='mt-2'>{product.product_name}</h5>
                <p className='text-muted'>{product.product_description}</p>
                <h5 className='text-success mb-3'>ksh:{product.product_cost}</h5>
                <button className='btn btn-danger' onClick={() => navigate("/makepayment", { state: { product } })}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
      
      

    </div>
  )
}

export default GetProducts
