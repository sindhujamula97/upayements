import React, { useState, useEffect, useRef } from "react";
import { Card, Row, Col } from "react-bootstrap";
import apple from "./apple-11.jpg";
import "./style.css";

function Plp() {
const [newData,setNewData] = useState()

const redirectToPdp = () =>{


}

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://upayments-studycase-api.herokuapp.com/api/products";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmRodWphbXVsYUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vc2luZGh1amFtdWxhOTciLCJpYXQiOjE2NjI1NTIzNzMsImV4cCI6MTY2Mjk4NDM3M30.iZFuQMOL28Jquff6oVGjJJEU2NmCQ50erqQoxfee5ls";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newData = await response.json();
      setNewData(newData)
      console.log(newData?.products, "products");
    };

    fetchData();
  });

  return (
    <React.Fragment id="plp-container">
      <div className="plp-container">
        <Row>
          {newData?.products?.map((object) => {
            return (
              <Col md={{span:3}} className="plp-layout">
                <Card
                onClick={()=>redirectToPdp(newData?.products?._id)}>
                  <Card.Img src={apple} className="card-img" />
                  <Card.Text className="product-text">
                    {object?.name}
                    <p className="price-text">{object?.price}$</p>
                  </Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        ;
      </div>
    </React.Fragment>
  );
}

export default Plp;
