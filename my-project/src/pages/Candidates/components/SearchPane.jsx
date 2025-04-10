import React from "react";
import RegionCand from "./RegionCand";
import CategoryCand from "./CategoryCand";
import FormToWrap from "./FormToWrap";
import EngilishLevel from "./EngilishLevel";
import Employment from "./Employment";

function SearchPane() {
  return (
    <div className="search-pane">
      <form method="get" id="searchform" className="form">
        <RegionCand />
        <CategoryCand />
         <FormToWrap/>
         <EngilishLevel/>
         <Employment/>
      </form>
    </div>
  );
}

export default SearchPane;
