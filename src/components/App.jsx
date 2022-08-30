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
  LoginPage,
  ProductListPage,
  ModifyDestinationPage,
} from '../pages';
import { MyPage } from '../pages/MyPage';
import {
  OrderPage,
  OrderChangeDestinationPage,
  OrderChangeRecipientPage,
  OrderChangeShippingMessagePage,
} from '../pages/Order';
import Product from '../pages/Product/Product';
import {
  SignUpPage,
  SignUpAuthPage,
  SignUpFormPage,
  SignUpAgreementPage,
  SignUpDonePage,
} from '../pages/SignUp';
import { ScrollToTop } from './common/ScrollToTop';
import { WithdrawMember, MyDestinations } from './contents';
import WithDestinations from './contents/WithDestinations/WithDestinations';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/products" element={<ProductListPage />}>
          <Route path=":largeCategoryId" element={<ProductListPage />}>
            <Route path=":mediumCategoryId" element={<ProductListPage />}>
              <Route path=":smallCategoryId" element={<ProductListPage />} />
            </Route>
          </Route>
        </Route>
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
          element={<OrderChangeDestinationPage />}
        />
        <Route
          path="/orderChangeRecipient"
          element={<OrderChangeRecipientPage />}
        />
        <Route
          path="/orderChangeShippingMessage"
          element={<OrderChangeShippingMessagePage />}
        />
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="/withdrawMember" element={<WithdrawMember />} />
        <Route path="/paymentMeans" element={<PaymentMeansPage />} />
        <Route path="/destination" element={<DestinationPage />}>
          <Route index element={<MyDestinations />} />
          <Route path="withDes" element={<WithDestinations />} />
        </Route>
        <Route path="/addDestination" element={<AddDestinationPage />} />
        <Route path="/modifyDestination" element={<ModifyDestinationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
