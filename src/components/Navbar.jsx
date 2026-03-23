import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const logout = () => {
        localStorage.clear("user")
    }
    return (
        <div className='row'>
            <div className='App'>
                <header className='App-header'>
                    <h1>Kibble's Online Pet Store</h1>

                </header>
            </div>
            <div className='col-md-12'>
                <div className='navbar navbar-expand-md navbar-info bg-secondary'>
                    <Link to={'/'} className='navbar-brand'>Kibble's Petstore</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target="#navbarcollapse">
                        <span className='navbar-toggler-icon'></span></button>

                    {/* collapsable content */}
                    <div className='collapse navbar-collapse' id='navbarcollapse'>
                        <div className='navbar-nav'>
                            <Link to={'/'} className='nav-link active'>Home</Link>

                            {user ?
                                (
                                    <>
                                        <Link to={'addproducts'} className='nav-link'>Add Products</Link>
                                        <Link className='nav-link'>Welcome {user.username}</Link>
                                        <Link to={'/signin'} onClick={() => logout()} className='nav-link'>Log out</Link>
                                    </>

                                ) : (
                                    <>
                                    
                                    <Link to={'signin'} className='nav-link'>Sign in</Link>
                                    <Link to={'/signup'} className='nav-link'>Sign up</Link>
                                    </>

                            )}


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar