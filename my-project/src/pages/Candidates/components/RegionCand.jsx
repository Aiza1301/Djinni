import React from "react";

function RegionCand() {
  return (
    <div className="page__filter-group">
      <h4 className="page-md">Region</h4>
      <ul className="list-unstyled">
        <li>
          <a href="#">Ukraine</a>
        </li>{" "}
        {/* Link react router dom yoki navigate */}
        <li>
          <a href="#">Poland</a>
        </li>
        <li>
          <a href="#">Germany</a>
        </li>
        <li>
          <a href="#">Spain</a>
        </li>
        <li>
          <a href="#">Portugal</a>
        </li>
        <li>
          <a href="#">Romania</a>
        </li>
        <li>
          <a href="#">Azerbiajan</a>
        </li>
        <li>
          <a href="#">EU countreis</a>
        </li>
        <li>
          <a href="#">Other countreis</a>
        </li>
      </ul>
    </div>
  );
}

export default RegionCand;
