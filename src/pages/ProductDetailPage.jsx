import React from 'react';
import { useParams } from 'react-router-dom';
import { FloatingContents, Footer, Header } from '../components/common/index';

function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div>
      <Header />
      <h1>상품 상세 페이지</h1>
      <p>상품 ID : {productId}</p>
      <FloatingContents />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
