import React, { useEffect, useState } from 'react';

function FtUpBtn() {
  const useScroll = () => {
    const [state, setState] = useState({
      y: 0,
    });
    // y좌표를 0으로 초기화
    const onScroll = () => {
      setState({ y: window.scrollY });
    };
    // state값을 수정해주는 함수
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return state;
  };
  console.log(useScroll);
  const { y } = useScroll();

  return (
    <div className={y > 300 ? 'floating_top viewCom' : 'floating_top'}>
      <a
        // href="javascript:window.scrollTo(0,0)"
        href="/"
        className="floating_btn ty_top clickable"
        data-react-tarea="웹공통_N|버튼_영역|위로"
      >
        <span className="blind">TOP</span>
        <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
      </a>
    </div>
  );
}

export default FtUpBtn;
