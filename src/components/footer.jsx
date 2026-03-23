import React from 'react'

const Footer=()=>{
    return(

        <div className='row bg-secondary text-light p-4'>
            <div className='col-md-4'>
                <h3 className='text-center text-dark'>About Us</h3>
                <p>Here at Kibbles online pet store,we offer quality pet care and healthy,well fitting balanced diet meals to fit your pets need. We value customer opinions inoder to improve our services.We offer variety of treats,toys and grooming for your variety of pets.Welcome again and we hope we meet not only your satisfaction but also your pets. </p>
            </div>

            <div className='col-md-4'>
                <h4 className='text-dark'>Contact us</h4>
                <form>
                    <input type='email' placeholder='Enter your email' className='form-control' required/>
                    <br/>
                    <textarea placeholder='Leave a comment'
                    className='form-control'/>
                    <br/>
                    <button type='submit' className='btn btn-dark'>Send message</button>
                </form>
            </div>

            <div className='col-md-4 text-center'>
                <h4 class="text-center">Let's grow together. Stay in touch</h4>
                <a href="https://www.facebook.com"><img src="/images/fb.png" alt=""/></a>
                <a href="https://www.instagram.com"><img src="images/in.png" alt=""/></a>
                <a href="https://www.x.com"><img src="images/x.png" alt=""/></a>
                <p class="mt-3">See it in the wild. Join our community</p>

            </div>
            

        </div>
    )

}

export default Footer
