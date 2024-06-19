import React from "react";
import { categories, products } from "../script";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CategoryPage() {
    const { productType } = useParams();
    console.log("productType:", productType);
    const category = categories.find(data => data.category_name === productType);
    const its_products = products.filter(item => item.category_name === category?.category_name);
    const originalString = productType;
    const productType_CategoryName = originalString
        .toLowerCase()
        .replace(/_/g, ' ') // Replace underscores with spaces
        .replace(/^\w/, c => c.toUpperCase()); // Capitalize the first letter

    // console.log(productType_CategoryName); // Output: "Hair care"
    return (
        <>
            <div className="wrapper">
                <main className="category--main">
                    <header>
                        <h1 className="category_name--title">{productType_CategoryName}</h1>
                    </header>
                    <div className="container">
                        {its_products.map((item, index) => (
                            <section key={index} className="product-container">
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="product-img-container">
                                            {Object.entries(item).map(([key, value]) => (
                                                key === "img" &&
                                                <img key={key} className="img--container" src={value} alt={item.product_name} />
                                            ))}
                                        </div>

                                        <div className="details-container">
                                            <div className="details-content">
                                                <div className="detail-group">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        key !== 'id' && key !== "category_name" && key !== 'img' && key !== "price" && key !== "net_weight" &&
                                                        <div key={key} className='product-detail'>
                                                            <>
                                                                <span className="arr_key--name">
                                                                    {key.toLowerCase()
                                                                        .replace(/_/g, ' ')
                                                                        .replace(/^\w/, c => c.toUpperCase())}:
                                                                </span>{" "} {value}
                                                            </>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Grouping price and net_weight values */}
                                                <div className="price-net-container">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        (key === 'price' || key === 'net_weight') && (
                                                            <div key={key} className={`detail ${key === 'price' ? 'price_detail' : ''} ${key === 'net_weight' ? 'net_weight' : ''}`}>
                                                                <span className="arr_key--value">
                                                                    {value}
                                                                </span>
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="details-container">
                                            <div className="details-content">

                                                <div className="detail-group">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        key !== 'id' && key !== "category_name" && key !== 'img' && key !== "price" && key !== "net_weight" &&
                                                        <div key={key} className='product-detail'>
                                                            <>
                                                                <span className="arr_key--name">
                                                                    {key.toLowerCase()
                                                                        .replace(/_/g, ' ')
                                                                        .replace(/^\w/, c => c.toUpperCase())}:
                                                                </span>{" "}
                                                                {value}
                                                            </>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Grouping price and net_weight values */}
                                                <div className="price-net-container">
                                                    {Object.entries(item).map(([key, value]) => (
                                                        (key === 'price' || key === 'net_weight') && (
                                                            <div key={key} className={`detail ${key === 'price' ? 'price_detail' : ''} ${key === 'net_weight' ? 'net_weight' : ''}`}>
                                                                <span className="arr_key--value">
                                                                    {value}
                                                                </span>
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-img-container">
                                            {Object.entries(item).map(([key, value]) => (
                                                key === "img" &&
                                                <img key={key} className="img--container" src={value} alt={item.product_name} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </section>
                        ))}
                    </div>
                </main >
            </div >
            <footer>
                <div className="container row">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                            <li className="nav__item"><Link to="/products" className="nav__link">Products</Link></li>
                            <li className="nav__item"><Link to="/products" className="nav__link">Contact</Link></li>
                            <li className="nav__item"><Link to="/products" className="nav__link">Connect</Link></li>
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