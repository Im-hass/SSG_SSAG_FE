import React from 'react';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../store/states';
import './HeaderBackArrow.scss';

function HeaderBackArrow() {
  const [, setIsOpen] = useRecoilState(isOpenState);

  const handleOpenSearch = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);
  return (
    <button
      className="back-arrow"
      type="button"
      onClick={() => handleOpenSearch('close')}
      onKeyDown={() => handleOpenSearch('close')}
    >
      <i className="back-arrow-icon" />
    </button>
  );
}

export default HeaderBackArrow;
