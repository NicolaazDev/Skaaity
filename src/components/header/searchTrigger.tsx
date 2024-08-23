import React from "react";

import { SearchIcon } from "lucide-react";

interface Props {}

const SearchTrigger: React.FC<Props> = ({}) => {
  return (
    <button className="nav-icon center">
      <SearchIcon size={20} />
    </button>
  );
};

export default SearchTrigger;
