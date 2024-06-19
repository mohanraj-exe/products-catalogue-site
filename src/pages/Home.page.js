import React from "react";
import "../styles.css";
import { image1, image2, image3 } from "../images";
import { Link } from "react-router-dom";
// import { categories } from "../script";

export default function Home() {
    const scrollToTop = () => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <main className="home">
                <div className="container">
                    <h1>Amazon</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia, porro consectetur, sequi a
                        fugit perspiciatis molestias recusandae dolorem vel excepturi assumenda esse est non? Quisquam vero
                        explicabo totam consectetur!
                    </p>
                    <Link to="/products" className="view-all-products--link" id="products_all" >View all {">"}</Link>
                </div>
            </main>
            <section className="categories">
                <div className="row">
                    <div>
                        <h2 className="shop-by-product--title">Shop by Product type</h2>
                    </div>
                    <section className="product-type--container">
                        <div className="product-type--section">

                            {/* {category.map((item, index) => (
                                <div key={index} className="product-type--item">
                                    {Object.entries(item).map(([key, value]) => (
                                        // Skip rendering 'id' and 'description' property
                                        key !== 'id' && key !== "description" &&
                                        <div key={key}>
                                            {key === 'img' ? (
                                                <img className="img--container" src={value} alt={item.category_name} />
                                            ) : (
                                                <Link to={`/category/${value}`} className="product-type--link">
                                                    {value.toLowerCase()
                                                        .replace(/_/g, ' ')
                                                        .replace(/^\w/, c => c.toUpperCase())}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))} */}

                            <div className="product-type--item-div">
                                <div className="product-type--item">
                                    <Link to={'/category/hair_care'} className="product-type--link">Hair care {">"}</Link>
                                    <img className="img--container" src={image1} alt="hair_care" />
                                </div>

                                <div className="color-div">
                                    <section className="color-div--section">
                                        <ul>
                                            <li> Available in four different flavors</li>
                                            <li> Range starts from $5.00</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>

                            <div className="product-type--item-div">
                                <div className="color-div">
                                    <section className="color-div--section">
                                        <ul>
                                            <li> Available in four different flavors</li>
                                            <li> Range starts from $5.00</li>
                                        </ul>
                                    </section>
                                </div>

                                <div className="product-type--item">
                                    <Link to={'/category/body_soap'} className="product-type--link">Body soap {">"}</Link>
                                    <img className="img--container" src={image1} alt="body_soap" />
                                </div>
                            </div>

                            <div className="product-type--item-div">
                                <div className="product-type--item">
                                    <Link to={'/category/lip_balm'} className="product-type--link">Lip balm {">"}</Link>
                                    <img className="img--container" src={image3} alt="lip_balm" />
                                </div>

                                <div className="color-div">
                                    <section className="color-div--section">
                                        <ul>
                                            <li> Available in four different flavors</li>
                                            <li> Range starts from $5.00</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>

                            <div className="product-type--item-div">
                                <div className="color-div">
                                    <section className="color-div--section">
                                        <ul>
                                            <li> Available in four different flavors</li>
                                            <li> Range starts from $5.00</li>
                                        </ul>
                                    </section>
                                </div>

                                <div className="product-type--item">
                                    <Link to={'/category/bath_salt'} className="product-type--link">Bath salt {">"}</Link>
                                    <img className="img--container" src={image2} alt="bath_salt" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <footer>
                <div className="container row">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/" className="nav__link" onClick={scrollToTop}>Home</Link></li>
                            <li className="nav__item"><Link to="/products" className="nav__link">Products</Link></li>
                            <li className="nav__item disabled"><Link to="/products" className="nav__link">Contact</Link></li>
                            <li className="nav__item disabled"><Link to="/products" className="nav__link">Connect</Link></li>
                        </ul>
                    </nav>
                    <aside className="address">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia, porro consectetur, sequi a
                            fugit perspiciatis molestias recusandae dolorem vel excepturi assumenda esse est non? Quisquam vero
                            explicabo totam consectetur!
                        </p>
                    </aside>
                </div>
            </footer>
        </>
    )
}