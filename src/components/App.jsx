import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AuthContext from '../store/auth-context';
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
  OrderPage,
  OrderInfoPage,
  WishListPage,
} from '../pages';
import { MyPage } from '../pages/MyPage';
import Product from '../pages/Product/Product';
import {
  SignUpPage,
  SignUpFormPage,
  SignUpAgreementPage,
  SignUpDonePage,
} from '../pages/SignUp';
import { ScrollToTop } from './common/ScrollToTop';
import { WithdrawMember, MyDestinations, CompleteOrder } from './contents';
import WithDestinations from './contents/WithDestinations/WithDestinations';
import PrivateRoute from '../lib/PrivateRoute';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/my" element={<MyPage />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/paymentMeans" element={<PaymentMeansPage />} />
          <Route path="/destination" element={<DestinationPage />}>
            <Route index element={<MyDestinations />} />
            <Route path="withDes" element={<WithDestinations />} />
          </Route>
          <Route path="/addDestination" element={<AddDestinationPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/completeOrder" element={<PrivateRoute />}>
          <Route path="/completeOrder" element={<CompleteOrder />} />
        </Route>
        <Route path="/orderInfo" element={<PrivateRoute />}>
          <Route path="/orderInfo" element={<OrderInfoPage />} />
        </Route>
        <Route path="/modifyDestination" element={<PrivateRoute />}>
          <Route
            path="/modifyDestination"
            element={<ModifyDestinationPage />}
          />
        </Route>
        {!authCtx.isLogin && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
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
        <Route path="/historyList" element={<RecentShoppingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
      <Toaster
        containerStyle={{
          top: 30,
        }}
        toastOptions={{
          duration: 2000,
        }}
      />
    </>
  );
}

export default App;
