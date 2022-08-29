import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer, FloatingContents } from '../components/common/index';
import { SearchContent } from '../components/contents/index';
import { isOpenState, searchValueState } from '../recoil/states';

function SearchResultPage() {
  const [isOpen] = useRecoilState(isOpenState);
  const { value } = useParams();
  const [, setSearchValue] = useRecoilState(searchValueState);

  useEffect(() => {
    setSearchValue(value);
  }, []);

  return (
    <div>
      <Header />
      {!isOpen && (
        <>
          <SearchContent />
          <Footer />
          <ToolbarList />
          <FloatingContents />
        </>
      )}
    </div>
  );
}

export default SearchResultPage;
