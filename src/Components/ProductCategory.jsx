import dress from '../assets/images/icons/dress.svg'
import shoes from '../assets/images/icons/shoes.svg'
import jewelry from '../assets/images/icons/jewelry.svg'
import perfume from '../assets/images/icons/perfume.svg'
import cosmetics from '../assets/images/icons/cosmetics.svg'
import glasses from '../assets/images/icons/glasses.svg'
import bags from '../assets/images/icons/bag.svg'
import {useEffect, useState} from "react";
import Categories from "./Categories.jsx";
import axios from 'axios'
// Your JavaScript/JSX file
// import dotenv from 'dotenv';
// dotenv.config();

const ProductCategory = () => {
    const [category, setCategory] = useState('clothes')
    const [products, setProducts] = useState([])
    const getProductsPerCategory = async () => {
           const res = await axios.get(`http://localhost:3000/products/category?category=${category}`)
           const data =  await res.data;
           if(data.data === null){
               setProducts([])
           }else {
           setProducts(data.data)
           }
    }
    useEffect(() => {
        getProductsPerCategory()
    }, [category]);
    return (
        <div className="product-container">
            <div className="container">
                {/*
      - SIDEBAR
    */}
                <div className="sidebar  has-scrollbar" data-mobile-menu>
                    <div className="sidebar-category">
                        <div className="sidebar-top">
                            <h2 className="sidebar-title">Category</h2>
                            <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline" />
                            </button>
                        </div>
                        <ul className="sidebar-menu-category-list">
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn

                                >
                                    <div className="menu-title-flex">
                                        <img src={dress} alt="clothes" width={20} height={20} className="menu-title-img" />
                                        <p className="menu-title"onClick={() => {
                                            setCategory('clothes')
                                        }}
                                        >Clothes</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Shirt</p>
                                            <data value={300} className="stock" title="Available Stock">300</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">shorts &amp; jeans</p>
                                            <data value={60} className="stock" title="Available Stock">60</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">jacket</p>
                                            <data value={50} className="stock" title="Available Stock">50</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">dress &amp; frock</p>
                                            <data value={87} className="stock" title="Available Stock">87</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={shoes} alt="footwear" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title"
                                           onClick={() => {
                                               setCategory('footwear')
                                           }}
                                        >Footwear</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Sports</p>
                                            <data value={45} className="stock" title="Available Stock">45</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Formal</p>
                                            <data value={75} className="stock" title="Available Stock">75</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Casual</p>
                                            <data value={35} className="stock" title="Available Stock">35</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Safety Shoes</p>
                                            <data value={26} className="stock" title="Available Stock">26</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={jewelry} alt="clothes" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title"
                                           onClick={() => {
                                               setCategory('jewelry')
                                           }}
                                        >Jewelry</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Earrings</p>
                                            <data value={46} className="stock" title="Available Stock">46</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Couple Rings</p>
                                            <data value={73} className="stock" title="Available Stock">73</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Necklace</p>
                                            <data value={61} className="stock" title="Available Stock">61</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={perfume} alt="perfume" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title"
                                           onClick={() => {
                                               setCategory('perfume')
                                           }}
                                        >Perfume</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Clothes Perfume</p>
                                            <data value={12} className="stock" title="Available Stock">12 pcs</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Deodorant</p>
                                            <data value={60} className="stock" title="Available Stock">60 pcs</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">jacket</p>
                                            <data value={50} className="stock" title="Available Stock">50 pcs</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">dress &amp; frock</p>
                                            <data value={87} className="stock" title="Available Stock">87 pcs</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={cosmetics} alt="cosmetics" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title"
                                           onClick={() => {
                                               setCategory('cosmetics')
                                           }}>Cosmetics</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Shampoo</p>
                                            <data value={68} className="stock" title="Available Stock">68</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Sunscreen</p>
                                            <data value={46} className="stock" title="Available Stock">46</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Body Wash</p>
                                            <data value={79} className="stock" title="Available Stock">79</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Makeup Kit</p>
                                            <data value={23} className="stock" title="Available Stock">23</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={glasses} alt="glasses" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title" onClick={() => {
                                            setCategory('glasses')
                                        }}>Glasses</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Sunglasses</p>
                                            <data value={50} className="stock" title="Available Stock">50</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Lenses</p>
                                            <data value={48} className="stock" title="Available Stock">48</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu-category">
                                <button className="sidebar-accordion-menu" data-accordion-btn>
                                    <div className="menu-title-flex">
                                        <img src={bags} alt="bags" className="menu-title-img" width={20} height={20} />
                                        <p className="menu-title" onClick={() => {
                                            setCategory('bags')
                                        }}>Bags</p>
                                    </div>
                                    <div>
                                        <ion-icon name="add-outline" className="add-icon" />
                                        <ion-icon name="remove-outline" className="remove-icon" />
                                    </div>
                                </button>
                                <ul className="sidebar-submenu-category-list" data-accordion>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Shopping Bag</p>
                                            <data value={62} className="stock" title="Available Stock">62</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Gym Backpack</p>
                                            <data value={35} className="stock" title="Available Stock">35</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Purse</p>
                                            <data value={80} className="stock" title="Available Stock">80</data>
                                        </a>
                                    </li>
                                    <li className="sidebar-submenu-category">
                                        <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Wallet</p>
                                            <data value={75} className="stock" title="Available Stock">75</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="product-showcase">
                        <h3 className="showcase-heading">best sellers</h3>
                        <div className="showcase-wrapper">
                            <div className="showcase-container">
                                <div className="showcase">
                                    <a href="#" className="showcase-img-box">
                                        <img src="./assets/images/products/1.jpg" alt="baby fabric shoes" width={75} height={75} className="showcase-img" />
                                    </a>
                                    <div className="showcase-content">
                                        <a href="#">
                                            <h4 className="showcase-title">baby fabric shoes</h4>
                                        </a>
                                        <div className="showcase-rating">
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                        </div>
                                        <div className="price-box">
                                            <del>$5.00</del>
                                            <p className="price">$4.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase">
                                    <a href="#" className="showcase-img-box">
                                        <img src="./assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img" width={75} height={75} />
                                    </a>
                                    <div className="showcase-content">
                                        <a href="#">
                                            <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                        </a>
                                        <div className="showcase-rating">
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star-half-outline" />
                                        </div>
                                        <div className="price-box">
                                            <del>$17.00</del>
                                            <p className="price">$7.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase">
                                    <a href="#" className="showcase-img-box">
                                        <img src="./assets/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width={75} height={75} />
                                    </a>
                                    <div className="showcase-content">
                                        <a href="#">
                                            <h4 className="showcase-title">girls t-shirt</h4>
                                        </a>
                                        <div className="showcase-rating">
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star-half-outline" />
                                        </div>
                                        <div className="price-box">
                                            <del>$5.00</del>
                                            <p className="price">$3.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase">
                                    <a href="#" className="showcase-img-box">
                                        <img src="./assets/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width={75} height={75} />
                                    </a>
                                    <div className="showcase-content">
                                        <a href="#">
                                            <h4 className="showcase-title">woolen hat for men</h4>
                                        </a>
                                        <div className="showcase-rating">
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                            <ion-icon name="star" />
                                        </div>
                                        <div className="price-box">
                                            <del>$15.00</del>
                                            <p className="price">$12.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box">


                    <div className="product-main">
                        <h2 className="title">New Products</h2>
                        {products && (<Categories products = {products} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCategory