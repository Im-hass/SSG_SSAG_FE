import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ToolbarList } from '../components/toolbar/ToolbarList';
import { Header, Footer } from '../components/common/index';
import { SearchContent } from '../components/contents/index';
import { searchValueState } from '../recoil/isOpenState';

function SearchResultPage() {
  const { value } = useParams();
  const [, setSearchValue] = useRecoilState(searchValueState);

  useEffect(() => {
    setSearchValue(value);
  }, []);

  return (
    <div>
      <Header />
      <SearchContent />
      <Footer />
      <ToolbarList />
    </div>
  );
}

export default SearchResultPage;
