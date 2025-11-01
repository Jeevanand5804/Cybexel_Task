import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import headphoneImage from '../images/headphone.png';
import computerImage from '../images/computer.png';
import mobileImage from '../images/mobile.png';
import joyStickImage from '../images/joyStick.jpg';

function Category() {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const staticCategories = [
      { name: 'Headphones', image: headphoneImage },
      { name: 'Smart Computers', image: computerImage },
      { name: 'Mobiles', image: mobileImage },
      { name: 'Joysticks', image: joyStickImage },
      { name: 'Gaming', image: headphoneImage },
      { name: 'Accessories', image: computerImage },
      { name: 'Speakers', image: joyStickImage },
    ];
    setCategories(staticCategories);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };
  const visibleItems = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ margin: '10px 200px', padding: '10px 10px' }}
      >
        <h2 className="fw-bold">Browse by Category</h2>
        <div>
          <Button
            className="bg-light text-dark border-0 me-2"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaArrowLeft />
          </Button>
          <Button
            className="bg-light text-dark border-0"
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= categories.length}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>

      {/* Category Cards */}
      <Container>
        <Row className="justify-content-center">
          {visibleItems.map((cat, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="text-center">
              <Card
                className="shadow-sm mb-3"
                style={{
                  width: '8rem',
                  height: '9rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px auto',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.0)')
                }
              >
                <Card.Img
                  variant="top"
                  style={{
                    height: '5rem',
                    width: '5rem',
                    objectFit: 'contain',
                  }}
                  src={cat.image}
                  alt={cat.name}
                />
                <Card.Body className="p-1">
                  <Card.Title
                    className="text-center"
                    style={{
                      fontSize: '15px',
                      textTransform: 'capitalize',
                    }}
                  >
                    {cat.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Category;
