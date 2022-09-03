import React from 'react';
import { useRecoilState } from 'recoil';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer, FloatingContents } from '../components/common/index';
import { SearchContent } from '../components/contents/index';
import { isOpenState } from '../recoil/states';

function SearchResultPage() {
  const [isOpen] = useRecoilState(isOpenState);

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
