import React from 'react'

function Map() {
    let foodItem = ["Daal", "Paneer", "Green Vagetable", "Salad", "Egg", "" ,"","","","",""]
    return (
        <div>
            <h1>Healthy Food</h1>
            <ol className="List-group">

                {foodItem.map((item) => (<li className="List-group-item">{item}</li>
                ))}
       


            </ol>
        </div>
    )
}

export default Map