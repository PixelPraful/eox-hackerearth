import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';

const ProductScreen = ({ history }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = {};
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    product.publisher = searchParams.get('publisher');
    product.title = searchParams.get('title');
    product.website = searchParams.get('website');
    product.date = searchParams.get('date');
    product.url = searchParams.get('url');
    setProduct(product);
  }, []);

  return (
    <>
      <button className="btn btn-dark my-3" onClick={history.goBack}>
        Go Back
      </button>
      <Row>
        <Col md={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Publisher: {product.publisher}
            </ListGroup.Item>
            <ListGroup.Item>
              Title: {product.title}
            </ListGroup.Item>
            <ListGroup.Item>
              Website: <a href={product.website}>{product.website}</a>
            </ListGroup.Item>
            <ListGroup.Item>
              Date: {new Date(parseInt(product.date, 10)).toLocaleDateString()}
            </ListGroup.Item>
            <ListGroup.Item>
              Url: <a href={product.url}>{product.url}</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
