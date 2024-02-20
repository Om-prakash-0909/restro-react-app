import React from "react";
// import { Form } from 'reactstrap'
import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import heroimg from "../assets//images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import serviceimg01 from "../assets/images/service-01.png";
import serviceimg02 from "../assets/images/service-02.png";
import serviceimg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/product";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg04 from "../assets/images/hamburger.png";
import foodCategoryImg05 from "../assets/images/pizza.png";
import foodCategoryImg06 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png"

import TestimonialSlide from "../components/UI/slider/TestimonialSlider"

const featureData = [
  {
    title: "Quick Delivery",
    imgurl: serviceimg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, animi.",
  },
  {
    title: "Super dine In",
    imgurl: serviceimg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, animi.",
  },
  {
    title: "Easy Pick Up",
    imgurl: serviceimg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, animi.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);

  // useEffect(()=>{
  //   const filterPizza=products.filter((item)=>item.category==="pizza")
  //   com
  // })

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }
    if (category === "Burger") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "pizza") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Bread") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Chicken") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chicken"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Starter") {
      const filteredProducts = products.filter(
        (item) => item.category === "Starter"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Desert") {
      const filteredProducts = products.filter(
        (item) => item.category === "Desert"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>HUNGRY?</span> Just wait food at{" "}
                  <span> your door step</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                  rem numquam culpa qui provident facilis.
                </p>
                <div className="hero_btns d-flex align-items-center gap-5">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now<i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                  {/* <button className='all_foods-btn'><a href="/foods">See all food</a></button> */}
                </div>
                <div className=" hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroimg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo, alias!
              </p>
              <p className="feature_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam, inventore.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" sm="6" xs="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img src={item.imgurl} alt="feature-img" className="w-25 mb-3" />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button
                  className="all__btn foodBtnActive"
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("Burger")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("pizza")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  pizza
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("Bread")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("Chicken")}
                >
                  <img src={foodCategoryImg04} alt="" />
                  Chicken
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("Starter")}
                >
                  <img src={foodCategoryImg05} alt="" />
                  Starter
                </button>
                <button
                  className="d-flex align-items-center gap-2"
                  onClick={() => setCategory("Desert")}
                >
                  <img src={foodCategoryImg06} alt="" />
                  Desert
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" >
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat mt-4 ">
                <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat ?</span></h2>
                <p className="tasty__treat-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  repellendus, velit non amet eveniet in vitae nobis nesciunt
                  deserunt sapiente! Recusandae provident, deleniti pariatur
                  corporis rerum nulla maiores cumque adipisci.
                </p>

                <ListGroup className="mt-4 ">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and Tasty Foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, harum?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                        Quality Support Team 
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, harum?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Delivary From any Where
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, harum?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="break" >
              <h6>All over India</h6>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
          <Col lg="6" md="6">
              <div className="testimonial mt-4">
              <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
              <h2 className="testimonial__title mb-4">What our <span>Customers</span> are saying</h2>
              <p className="testimonial__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex alias rerum laudantium beatae mollitia quae atque eum molestias fugit.</p>
              <TestimonialSlide/>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
