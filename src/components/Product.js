import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-1 rounded h-100">
      <Card.Body>
        <Card.Text as="div">
          <span className="badge badge-danger">{product.PUBLISHER}</span>
        </Card.Text>
        <br />
        <Link to={`/publisher/${product.PUBLISHER}?publisher=${product.PUBLISHER}&&title=${product.TITLE}&&website=${product.HOSTNAME}&&date=${product.TIMESTAMP}&&url=${product.URL}`}>
          <Card.Title as="div">
            <strong>{product.TITLE}</strong>
          </Card.Title>
        </Link>
        <Card.Text className="m-0">Website: <a className="m-0" rel="noreferrer" target="_blank" href={product.HOSTNAME}>{product.HOSTNAME}</a></Card.Text>
        <Card.Text className="m-0">Date: {new Date(product.TIMESTAMP).toLocaleDateString()}</Card.Text>
        <a className="text-danger mt-4" rel="noreferrer" target="_blank" href={product.URL}>Read more</a>
      </Card.Body>
    </Card>
  );
};

export default Product;
