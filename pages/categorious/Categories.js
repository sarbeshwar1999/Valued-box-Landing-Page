import React from 'react'


import './Categories.css'

const Categories = () => {
    return (
        <div className="categorie-section">
                             <div className="categorie-container">
                                    <div className="categories-heading">
                                            Special Categories
                                            </div>
                                <div className="row">
                                   
                                    <div className="col-md-4">
                                    
                                    <h4 className="categorie-title">If you are product 
                                    is special</h4>
                                    <hr/>
                                    <div className="categorie-about">
                                    If you product lie under categories like-
                                        O carbon emission product, natural organic product, environment friendly product, recycled material product then you will get a lot of special features and discounts on our service.
                                    </div>
                                    </div>

                                    <div className="col-md-4">
                                    
                                    <h4 className="categorie-title">If you are operating
                                    from some market </h4>
                                    <hr/>
                                    <div className="categorie-about">
                                    If you produce some regional special products like Kashmir Shawls, Madhubani Arts, etc then you can sell direct to your end customer with all support.
                                    </div>
                                    </div>

                                    <div className="col-md-4">
                                    
                                    <h4 className="categorie-title">If you are a social 
                                    worker organisation</h4>
                                    <hr/>
                                    <div className="categorie-about">
                                    If you are a NGO or non profit organisation or a home made product maker or working for women empowerment, you are welcome. You will get a free access for our service from our home and spread your products all over india.
                                    </div>
                                    </div>


                                 </div>
                                 
                           </div>
                           <div className="color-part"></div>
           
        </div>
    )
}

export default Categories;


