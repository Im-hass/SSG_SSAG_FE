import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import AuthContext from '../../store/auth-context';
import {
  FloatingContents,
  Footer,
  Header,
} from '../../components/common/index';
import { MobileHeader } from '../../components/ui/index';
import ToolbarList from '../../components/toolbar/ToolbarList/ToolbarList';
import UserSection from './UserSection';
import UserManageSection from './UserManageSection';
import './MyPage.scss';
import LoginPage from '../LoginPage';
import { isOpenState } from '../../recoil/states';

function MyPage() {
  const ctx = useContext(AuthContext);
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <>
      {!ctx.isLogin && <LoginPage />}
      {ctx.isLogin && !isOpen ? (
        <>
          <MobileHeader title="MY SSG" />
          <div className="myssg_main">
            <UserSection />
            <UserManageSection />
            <Footer />
            <ToolbarList />
            <FloatingContents />
          </div>
        </>
      ) : (
        <Header />
      )}
    </>
  );
}

export default MyPage;
