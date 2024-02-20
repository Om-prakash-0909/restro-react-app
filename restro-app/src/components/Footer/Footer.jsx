import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'

import '../../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <footer className="footer mt-4">
   <Container>
    <Row>
      <Col lg='3' md='4' sm='6'>
      <div className=" footer_logo text-start">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laborum cupiditate eius no

            </p>
            </div>
      </Col>
      <Col lg='3' md='4' sm='6'>
        <h4 className="footer_title">Delivery Time</h4>
        <ListGroup>
          <ListGroupItem className="delivery_time-item border-0 ps-0">
            <span>Sunday - Thursday</span>
            <p>10:00 am - 11:00 pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery_time-item border-0 ps-0">
            <span>Friday - Saturday</span>
            <p>off day</p>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col lg='3' md='4' sm='6'>
      <h4 className="footer_title">Contact</h4>
        <ListGroup>
        <ListGroupItem className="delivery_time-item border-0 ps-0">
            <p>Location: Gandhi nagar Shop No-45,berhampur,odisha pin-760004</p>
          </ListGroupItem>
          <ListGroupItem className="delivery_time-item border-0 ps-0">
            <span>Phone: 9556031313</span>
            <p>10:00 am - 11:00 pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery_time-item border-0 ps-0">
            <span>Email: omprakashsethi30@gmail.com</span>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col lg='3' md='4' sm='6'>
      <h4 className="footer_title">Newsletter</h4>
      <p>Subscribe our newsletter</p>
      <div className="newsletter">
        <input type="email" placeholder="Enter your email"/>
        <span><i className="ri-send-plane-line"></i></span>
      </div>
      </Col>
    </Row>
    <Row>
      <Col lg='6' md='6'>
        <p className="copyright_text">Copyright - 2022, website made by Om prakash.All Right to Reserved.</p>
      </Col>
      <Col lg='6' md='6'>
        <div className="social_links d-flex align-items-center gap-4 justify-content-end">
          <p>Follow:</p>
          <span><Link to=''><i class="ri-facebook-fill"></i></Link></span>
          <span><Link to=''><i class="ri-instagram-fill"></i></Link></span>
          <span><Link to=''><i class="ri-twitter-fill"></i></Link></span>
        </div>
      </Col>
    </Row>
   </Container>
  </footer>
}

export default Footer
