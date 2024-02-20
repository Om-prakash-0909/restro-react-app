import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import categoryImg01 from "../../../assets/images/category-01.png"
import categoryImg02 from "../../../assets/images/category-02.png"
import categoryImg03 from "../../../assets/images/category-03.png"
import categoryImg04 from "../../../assets/images/category-04.png"

import '../../../styles/category.css'

const categorydata = [
    {
        display:'Fastfood',
        imgurl:categoryImg01
    },
    {
        display:'Pizza',
        imgurl:categoryImg02
    },
    {
        display:'Asian Food',
        imgurl:categoryImg03
    },
    {
        display:'Row Meat',
        imgurl:categoryImg04
    },
]
const catgory = () => {
  return <Container>
    <Row>
        {
            categorydata.map((item,index)=>(
                <Col lg='3' md='4' sm="6" xs="6" className='mb-3 '>
                    <div className="category_item d-flex align-items-center gap-3 ">
                        <div className="category_img">
                            <img src={item.imgurl} alt="category_item" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
        }
    </Row>
  </Container>
}

export default catgory
