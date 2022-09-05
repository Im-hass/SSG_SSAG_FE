import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../../../store/auth-context';

function CategoryFooter() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.logout();
    navigate('/');
    toast.success('로그아웃되었습니다.');
  };

  return (
    <div className="clnb_footer">
      <div className="clnb_renew_help">
        <Link to="/category" className="clnb_help_link clickable">
          <span>고객센터</span>
        </Link>
        <Link to="/category" className="clnb_help_link clickable">
          <span>제안해봐쓱</span>
        </Link>
        <Link to="/category" className="clnb_help_link">
          <span>공지사항</span>
        </Link>
        <Link to="/category" className="clnb_help_link">
          <span>입점상담</span>
        </Link>
        <Link
          to={authCtx.isLogin ? '/' : '/login'}
          className="clnb_help_link"
          id="lnb_loginBtn"
          onClick={authCtx.isLogin && handleLogout}
        >
          <span>{authCtx.isLogin ? '로그아웃' : '로그인'}</span>
        </Link>
      </div>
      <div className="clnb_renew_lang">
        <Link to="/category" className="clnb_lang_btn on">
          <span className="clnb_lang_tx ic_lang_kr">한국어 / KR</span>
        </Link>
        <Link to="/category" className="clnb_lang_btn">
          <span className="clnb_lang_tx ic_lang_en">English / EN</span>
        </Link>
        <Link to="/category" className="clnb_lang_btn">
          <span className="clnb_lang_tx ic_lang_chn">简体中文 / CN</span>
        </Link>
      </div>
    </div>
  );
}

export default CategoryFooter;
