import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import headphoneImage from "../images/headphone.png";
import computerImage from "../images/computer.png";
import mobileImage from "../images/mobile.png";
import joyStickImage from "../images/joyStick.jpg";

function Shop() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const staticCategories = [
      {
        name: "Headphones",
        image: headphoneImage,
        description: "High-quality wireless headphones for clear sound.",
      },
      {
        name: "Smart Computers",
        image: computerImage,
        description: "Powerful and efficient smart computers for work and play.",
      },
      {
        name: "Mobiles",
        image: mobileImage,
        description: "Latest smartphones with advanced technology and cameras.",
      },
      {
        name: "Joysticks",
        image: joyStickImage,
        description: "Ergonomic joysticks designed for ultimate gaming comfort.",
      },
      {
        name: "Gaming",
        image: headphoneImage,
        description: "High-performance gaming accessories for pros.",
      },
      {
        name: "Accessories",
        image: computerImage,
        description: "Essential add-ons to enhance your device experience.",
      },
      {
        name: "Speakers",
        image: joyStickImage,
        description: "Premium speakers delivering immersive sound quality.",
      },
    ];
    setCategories(staticCategories);
  }, []);

  return (
    <div style={{ padding: "100px 20px" }}>
      <h2 className="fw-bold mb-3">Shop Page</h2>
      <p className="text-muted mb-4">
        Welcome to the shop! Explore our collection of high-quality products below.
      </p>

      <Container>
        <h3 className="fw-semibold mb-4">Categories</h3>
        <Row className="justify-content-center">
          {categories.map((cat, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card
                className="shadow-sm h-100"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <Card.Img
                  variant="top"
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    height: "140px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title
                      className="text-center"
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {cat.name}
                    </Card.Title>
                    <Card.Text
                      className="text-muted text-center"
                      style={{
                        fontSize: "14px",
                        marginTop: "8px",
                        minHeight: "48px",
                      }}
                    >
                      {cat.description}
                    </Card.Text>
                  </div>
                  <div className="text-center mt-3">
                    <Button variant="primary" size="sm">
                      View More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
