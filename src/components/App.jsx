import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  AddDestinationPage,
  CartPage,
  DestinationPage,
  MainPage,
  NotFoundPage,
  RecentShoppingPage,
  SearchResultPage,
  PaymentMeansPage,
  CategoryPage,
  MyPage,
  LoginPage,
} from '../pages';
import { OrderPage, OrderDestinationChangePage } from '../pages/Order';
import Product from '../pages/Product/Product';
import {
  SignUpPage,
  SignUpAuthPage,
  SignUpFormPage,
  SignUpAgreementPage,
  SignUpDonePage,
} from '../pages/SignUp';
import { ScrollToTop } from './common/ScrollToTop';
import { WithdrawMember } from './contents';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/search/:value" element={<SearchResultPage />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/my" element={<MyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signupAuth" element={<SignUpAuthPage />} />
        <Route path="/signupAgreement" element={<SignUpAgreementPage />} />
        <Route path="/signupForm" element={<SignUpFormPage />} />
        <Route path="/signupDone" element={<SignUpDonePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route
          path="/orderDestination"
          element={<OrderDestinationChangePage />}
        />
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="/withdrawMember" element={<WithdrawMember />} />
        <Route path="/paymentMeans" element={<PaymentMeansPage />} />
        <Route path="/destination" element={<DestinationPage />}>
          <Route path=":menu" element={<DestinationPage />} />
        </Route>
        <Route path="/addDestination" element={<AddDestinationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
