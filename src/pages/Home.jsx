import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import "../styles/home.css";

import shopData from "../assets/fake-data/shops.js";


import ShopCard from "../components/UI/shop-card/ShopCard.jsx";



const Home = () => {

  const [shops, setShops] = useState([]);

  useEffect(() => {
    setShops(shopData);
  }, []);


  return (
    <Helmet title="Home">
      
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>ร้านค้า</h2>
            </Col>

            {shops.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id}>
                <ShopCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;
