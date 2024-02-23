import dress from '../assets/images/icons/dress.svg'
import coat from '../assets/images/icons/coat.svg'
import glasses from '../assets/images/icons/glasses.svg'
import shorts from '../assets/images/icons/shorts.svg'
import tee from '../assets/images/icons/tee.svg'
import jacket from '../assets/images/icons/jacket.svg'
import watch from '../assets/images/icons/watch.svg'
import hat from '../assets/images/icons/hat.svg'

const Categories = (props) => {
    // eslint-disable-next-line react/prop-types
    const {products} = props
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="product-grid" >
                {products && products.length > 0 && products.map((product, index) => {
                    return (
                        <div className="col-md-3">

                            <div className="showcase">
                                <div className="showcase-banner">
                                    <img src="./assets/images/products/jacket-3.jpg" alt={product.category +": "+product.description}
                                         width={300}
                                         className="product-img default"/>
                                    {/*<img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets"*/}
                                    {/*     width={300}*/}
                                    {/*     className="product-img hover"/>*/}
                                    {/*<p className="showcase-badge">15%</p>*/}
                                    <div className="showcase-actions">
                                        <button className="btn-action">
                                            <ion-icon name="heart-outline"/>
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="eye-outline"/>
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="repeat-outline"/>
                                        </button>
                                        <button className="btn-action">
                                            <ion-icon name="bag-add-outline"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="showcase-content">
                                    <a href="#" className="showcase-category">{product.category}</a>
                                    <a href="#">
                                        <h3 className="showcase-title"></h3>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star"/>
                                        <ion-icon name="star"/>
                                        <ion-icon name="star"/>
                                        <ion-icon name="star-outline"/>
                                        <ion-icon name="star-outline"/>
                                    </div>
                                    <div className="price-box">
                                        <p className="price">$ {product.price}</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            </div>

            </div>

        </>

    )
}

export default Categories