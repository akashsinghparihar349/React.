import React from 'react'

const Product = () => {
    return (
        <div className='product'>
            <center>
            <div class="container text-center">
                <div class="row">
                    <div class="col-6">
                        <h1>Buy Milk</h1>
                    </div>
                    <div class="col-4">
                        <h1>04/10/2026</h1>
                    </div>
                    <div class="col-2"><button type="button" class="btn btn-danger">delete</button></div>
                </div>
            </div>

            <div class="container text-center">
                <div class="row">
                    <div class="col-6">
                        <h1>Go To Collage</h1>
                    </div>
                    <div class="col-4">
                        <h1>04/10/2026</h1>
                    </div>
                    <div class="col-2"><button type="button" class="btn btn-danger">delete</button></div>
                </div>
            </div>
            </center>
        </div>
    )
}

export default Product