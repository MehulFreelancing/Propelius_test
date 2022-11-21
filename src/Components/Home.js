import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import Header from "./Header";
import MultiRangeSlider from "./MultipleRange";

function Home() {
  const inititalProducts = useSelector((state) => state?.user?.products);

  const [products, setProducts] = useState(inititalProducts);

  //   let [categories,_categories]= useState([""])

  const navigate = useNavigate()

  let categories = ["All Computers", "Leptop", "Keyboard", "Mobiles"];
  const [activeCate, _activeCate] = useState(categories[0]);

  let brands = [
    "Apple",
    "Samsung",
    "Black berry",
    "Sony",
    "Asus",
    "Google",
  ];

  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    setProducts((prevState) => {
      if (checked.length > 0) {
        return inititalProducts.filter((item) => checked.includes(item.brand));
      } else {
        return inititalProducts;
      }
    });
  }, [checked]);

  const onSort = (type) => {
    if (type === "high to low") {
      const sortedProducts = products.slice().sort((a, b) => a.price + b.price);
      setProducts(sortedProducts);
    } else {
      const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <Header />
        {/* <!-- Main Content Start--> */}
        <div className="main_content_wrapper">
          <div className="product_slider_section">
            <div className="container">
              <div className="route_path">
                <span>Home</span>
                <span>
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.09L5.045 5.045L1 1"
                      stroke="#4F4F4F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>All products</span>
              </div>

              <BannerSlider />

            </div>
          </div>
          <div className="product_section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="filter_section">
                    <div className="left_filter_block">
                      <h2 className="cm_filter_title">Filter by</h2>                      
                      <div className="all_category_block">
                        <h3>
                          <svg
                            className="me-2"
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 11L1 6L6 1"
                              stroke="#333333"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          All Categories
                        </h3>
                        <ul className="">
                          {categories?.map((category, key) => (
                            <li key={key}>
                              <a
                                className={category === activeCate ? "active" : ""}
                                onClick={() => {
                                  _activeCate(category);
                                }}
                              >
                                {category}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h2 className="cm_filter_title pt-4">Price per month</h2>
                      <div className="multi_slider_block">
                        <MultiRangeSlider
                          min={0}
                          max={100}
                          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />
                      </div>
                      <h2 className="cm_filter_title pt-4">Brands</h2>
                      <div className="">
                        {brands.map((brand, key) => {
                          return (
                            <div className="form-group custom_checkbox" key={key}>
                              <input
                                type="checkbox"
                                id={brand}
                                onChange={() => {
                                  handleToggle(brand);
                                }}
                              />
                              <label htmlFor={brand}>{brand}</label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="filter_result_section">
                    <div className="filter_result_title">
                      <div className="filter_result_name">
                        <h3>{activeCate}</h3>
                        <p>Seo text will be here</p>
                      </div>
                      <div className="filter_dropdown_block">
                        <span> Sort by </span>
                        <div className="common_drop_down">
                          <div className="drop_down_title">
                            <div className="drop_down_arrow">
                              <span>Sort By Category</span>
                              <svg
                                width="15"
                                height="9"
                                viewBox="0 0 15 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.91 8L7.955 1.955L14 8"
                                  stroke="url(#paint0_linear_1_758)"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_758"
                                    x1="14"
                                    y1="8"
                                    x2="12.7568"
                                    y2="0.221438"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#D81F5A" />
                                    <stop offset="1" stopColor="#8438BF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <ul className="common_drop_down_list">
                            <li
                              onClick={() => {
                                onSort("high to low");
                              }}
                            >
                              Price (high to low)
                            </li>
                            <li
                              onClick={() => {
                                onSort("low to high");
                              }}
                            >
                              Price (low to high)
                            </li>
                            <li>Most popular</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="all_products_wrapper">
                      <div className="row">
                        {products
                          .filter((val) => {
                            if (activeCate === "All Computers") {
                              return val;
                            } else if (
                              activeCate
                                .toLowerCase()
                                .includes(val.category.toLowerCase())
                            ) {
                              return val;
                            }
                          })
                          .map((product, key) => {
                            return (
                              <div className="col-lg-4" key={key} onClick={() => { navigate(`prod-details/${product.id}`) }}>
                                <div className="product_item">
                                  {product?.offer_lab ? (
                                    <div className="special_tag">
                                      <div className="inner_box">
                                        <p>{product?.offer_lab}</p>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}

                                  <div className="product_image_wrapper">
                                    <div className="product_image_block">
                                      <img
                                        src={product?.image}
                                        alt={product?.prod_name}
                                      />
                                    </div>
                                  </div>
                                  <div className="product_info">
                                    <h2>{product?.prod_name} </h2>
                                    {product?.offer_amt ? (
                                      <p>
                                        <del> {product?.offer_amt}</del>
                                      </p>
                                    ) : (
                                      ""
                                    )}

                                    <div className="gradient_text">
                                      {product?.prod_desc}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                        <div className="col-12">
                          <div className="loadmore_btn">
                            <button>
                              <span> Load more products </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Content Close -->

        <!-- Footer Start -->
        <!-- Footer Close --> */}
      </div>
    </div >
  );
}

export default Home;
