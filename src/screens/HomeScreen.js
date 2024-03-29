import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword || '';
  const [currentPage, setCurrentPage] = useState(match.params.pageNumber || 1);
  const [keyWord, setkeyWord] = useState(keyword);
  const [searchProducts, setSeacrhProducts] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
    if (keyword) {
      const arr = products.filter(item => item.PUBLISHER.toLowerCase().includes(keyword) && item);
      setSeacrhProducts(arr);
      setkeyWord(keyword);
    }
  }, [dispatch, keyword]);

  const updatePage = (page, keyword) => {
    if (keyword) {
      history.push(`/search/${keyword}/page/${page}`);
    } else {
      history.push(`/page/${page}`);
    }
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="mt-3">Publishers</h1>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> :
        <>
          <Row>
            {
              searchProducts && searchProducts.length ?
                searchProducts.slice(currentPage * 20 - 20, currentPage * 20).map((product, i) => (
                  <Col key={i} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      id={i}
                      keyword={keyWord}
                    />
                  </Col>
                )) :
                products.slice(currentPage * 20 - 20, currentPage * 20).map((product, i) => (
                  <Col key={i} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                    <Product
                      product={product}
                      id={i}
                      keyword={keyWord}
                    />
                  </Col>
                ))
            }
          </Row>
          <Paginate keyword={keyWord} updatePage={updatePage} pages={searchProducts.length ? Math.ceil(searchProducts.length / 20) : Math.ceil(products.length / 20)} page={currentPage} />
        </>
      }
    </>
  );
};

export default HomeScreen;
