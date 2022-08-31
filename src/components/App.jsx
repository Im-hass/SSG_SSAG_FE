import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import {
  AddDestinationPage,
  CartPage,
  DestinationPage,
  MainPage,
  MyPage,
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
import OrderInfoPage from '../pages/OrderInfo/OrderInfoPage';
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
import PrivateRoute from '../lib/PrivateRoute';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        {!authCtx.isLogin && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signupAuth" element={<SignUpAuthPage />} />
            <Route path="/signupAgreement" element={<SignUpAgreementPage />} />
            <Route path="/signupForm" element={<SignUpFormPage />} />
            <Route path="/signupDone" element={<SignUpDonePage />} />
            <Route path="/withdrawMember" element={<WithdrawMember />} />
          </>
        )}
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/products" element={<ProductListPage />}>
          <Route path=":lgId" element={<ProductListPage />}>
            <Route path=":mdId" element={<ProductListPage />}>
              <Route path=":smId" element={<ProductListPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/search/:value" element={<SearchResultPage />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my" element={<PrivateRoute />}>
          <Route path="/my" element={<MyPage />} />
        </Route>
        <Route path="/paymentMeans" element={<PrivateRoute />}>
          <Route path="/paymentMeans" element={<PaymentMeansPage />} />
        </Route>
        <Route path="/destination" element={<PrivateRoute />}>
          <Route path="/destination" element={<DestinationPage />}>
            <Route index element={<MyDestinations />} />
            <Route path="withDes" element={<WithDestinations />} />
          </Route>
        </Route>
        <Route path="/addDestination" element={<PrivateRoute />}>
          <Route path="/addDestination" element={<AddDestinationPage />} />
        </Route>
        <Route path="/order" element={<PrivateRoute />}>
          <Route path="/order" element={<OrderPage />} />
        </Route>
        <Route path="/orderDestination" element={<PrivateRoute />}>
          <Route
            path="/orderDestination"
            element={<OrderChangeDestinationPage />}
          />
        </Route>
        <Route path="/orderChangeRecipient" element={<PrivateRoute />}>
          <Route
            path="/orderChangeRecipient"
            element={<OrderChangeRecipientPage />}
          />
        </Route>
        <Route path="/orderChangeShippingMessage" element={<PrivateRoute />}>
          <Route
            path="/orderChangeShippingMessage"
            element={<OrderChangeShippingMessagePage />}
          />
        </Route>
        <Route path="/modifyDestination" element={<PrivateRoute />}>
          <Route
            path="/modifyDestination"
            element={<ModifyDestinationPage />}
          />
        </Route>
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
