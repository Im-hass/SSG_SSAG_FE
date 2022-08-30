import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { FloatingContents, Footer } from '../../components/common/index';
import { MobileHeader } from '../../components/ui/index';
import ToolbarList from '../../components/toolbar/ToolbarList/ToolbarList';
import UserSection from './UserSection';
import UserManageSection from './UserManageSection';
import './MyPage.scss';
import LoginPage from '../LoginPage';

function MyPage() {
  const ctx = useContext(AuthContext);

  return (
    <>
      {!ctx.isLogin && <LoginPage />}
      {ctx.isLogin && (
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
      )}
    </>
  );
}

export default MyPage;
