import React from "react";
import SearchPane from "./SearchPane";

function CandidatPage() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">
          Candidates <span className="text"> 82514</span>
        </h1>
      </div>
      <div className="page-row">
        <SearchPane />
      </div>
    </div>
  );
}

export default CandidatPage;
