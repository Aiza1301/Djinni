import React, { useState } from "react";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import OtherTech from "./OtherTech";
import OtherNonTech from "./OtherNonTech";

function CategoryCand() {
  const [open, setOpen] = useState(null);

  const toggleCategory = (category) => {
    setOpen(open === category ? null : category);
  };

  const renderCategory = (name, subCategories = []) => (
    <li>
      <em
        className="em"
        onClick={() => toggleCategory(name)}
        style={{
          cursor: "pointer",
          color: open === name ? "#4D4C4C" : "#0969da",
        }}
      >
        {name}
        <small>
          <TbSquareRoundedChevronRightFilled
            style={{
              transform: open === name ? "rotate(90deg)" : "rotate(0deg)",
              transition: "0.3s",
              width: "40px",
              height: "25px",
            }}
          />
        </small>
      </em>
      {open === name && (
        <ul className="list-unstyled">
          {subCategories.map((sub) => (
            <li key={sub}>
              <a href="#">{sub}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="page__filter-group">
      <h4 className="page-md">Category</h4>
      <p className="page-md2">Development</p>
      <ul className="list-unstyled">
        {renderCategory("JavaScript / Front-End", [
          "Angular",
          "React.js",
          "Svelte",
          "Vue.js",
          "Markup",
        ])}
         <li><a href="#">Fullstack</a></li>
         <li><a href="#">Java</a></li>
        {renderCategory("C# / .NET", [
          "Server & Cloud",
          "Web Apps",
          "Mobile Apps",
          "Desktop Apps",
          ".NET Gamedev",
        ])}
        <li><a href="#">Python</a></li>
        {renderCategory("C / C++ / Embedded", ["C", "Embedded", "C++"])}
        {renderCategory("ERP Systems", [
          "MS Dynamics / Business Central",
          "Odoo",
          "SAP",
        ])}

  <li><a href="#">PHP</a></li>
  <li><a href="#">Node.js</a></li>
  <li><a href="#">iOS</a></li>
  <li><a href="#">Android</a></li>
  <li><a href="#">React Native</a></li>
  <li><a href="#">Flutter</a></li>
  <li><a href="#">Golang</a></li>
  <li><a href="#">Ruby</a></li>
  <li><a href="#">Scala</a></li>
  <li><a href="#">Salesforce</a></li>
  <li><a href="#">Rust</a></li>
  <li><a href="#">Elixir</a></li>
  <li><a href="#">Kotlin</a></li>
  <li><a href="#">No Code</a></li>
      </ul>
      <p className="page-md2">Other (tech)</p>
      <OtherTech  renderCategory={renderCategory}/>
      <p className="page-md2">Other (non tech)</p>
      <OtherNonTech />
    </div>
  );
}

export default CategoryCand;
