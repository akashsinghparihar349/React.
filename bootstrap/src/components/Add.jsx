import React from 'react'

function Add() {
    return (
        <div>
            <center>
            <div class="container text-center">
                <div class="row">
                    <div class="col-6">
                        <input type="text" className='todo' placeholder='Enter todo here' />
                    </div>
                    <div class="col-4">
                        <input type="date" className='date'/>
                    </div>
                    <div class="col-2"><button type="button" class="btn btn-success">Add</button></div>
                </div>
            </div>
            </center>

            
        </div>
    )
}

export default Add;