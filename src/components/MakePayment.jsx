import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const MakePayment = () => {
    //destructure/extract the state product that has been sent/parsed to this component
    const { product } = useLocation().state || {}
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    // console.log(product)
    

    const img_url = "https://eugene.alwaysdata.net/static/images/"
    const submit = async (e) => {
        e.preventDefault()
        setError("")
        setMessage("please wait as we process your payment")
        try {
            const data = new FormData()
            data.apppend("phone", phone)
            data.append("amount",product.product_cost)
            const response=await axios.post("https://eugene.alwaysdata.net/api/mpesa_payment",data)
        } catch (error) {
            setMessage("")
            setError(error.message)

        }

        return (
            <div className='row justify-content-center mt-5 text-center mt-5'>
                <h1 className='text-success'>Lipa Na M-pesa</h1>
                <h5 className='text-success'>{message}</h5>
                <h5 className='text-danger'>{error}</h5>
                <div className='col-md-6 text-center'>
                    <div className='card shadow p-3'>
                        <img src={img_url + product.product_photo} alt="" className='product_img' />
                        <div className='card-body'>
                            <h5>Product Name:{product.product_name}</h5>
                            <p className='text-muted'>Description:{product.product_description}</p>
                            <p className='text-warning'>Cost: {product.product_cost}</p>
                            <form onSubmit={submit}>
                                <p>Phone that will make payment</p>
                                <input type="text" placeholder='254...' className='form-control' value={phone} required onChange={(e) => setPhone(e.target.value)} /> <br />
                                <button type='submit' className='btn btn-success'>Pay Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MakePayment
    