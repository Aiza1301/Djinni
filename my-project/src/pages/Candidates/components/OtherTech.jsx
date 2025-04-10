function OtherTech({ renderCategory }) {
  const categories = [
    { type: "link", name: "QA Manual", href: "1" },
    { type: "link", name: "QA Automation", href: "2" },
    {
      type: "category",
      name: "Design",
      subCategories: [
        "Content Design / UX writer",
        "Graphic Design",
        "Product Design",
        "UI/UX",
        "UX Research",
      ],
    },
    {
      type: "category",
      name: "2D/3D Artist / Illustrator",
      subCategories: [
        "3D Animation",
        "2D Artist",
        "3D Artist",
        "Illustrator",
        "Motion Design",
        "VFX Artist",
        "Video Editor",
        "2D Animation",
      ],
    },
    {
      type: "category",
      name: "Gamedev",
      subCategories: ["Game Design", "Game Developer", "Level Design"],
    },
    { type: "link", name: "Project Manager" },
    { type: "link", name: "Product Manager" },
    { type: "link", name: "Product Owner" },
    { type: "link", name: "Delivery Manager" },
    { type: "link", name: "Scrum Master / Agile Coach", href: "3" },
    {
      type: "category",
      name: "Tech Leadership",
      subCategories: ["CTO", "Software Architect", "Engineering Manager"],
    },
    { type: "link", name: "DevOps" },
    {
      type: "category",
      name: "Security",
      subCategories: [
        "Information Security",
        "Security Analyst",
        "Penetration Tester",
      ],
    },
    { type: "link", name: "Sysadmin" },
    { type: "link", name: "Business Analyst" },
    { type: "link", name: "Data Science" },
    { type: "link", name: "Web Analyst" },
    { type: "category", name: "Data Analyst", subCategories: ["ML / AI"] },
    { type: "link", name: "Data Engineer" },
    { type: "link", name: "SQL / DBA" },
    { type: "link", name: "Technical Writing" },
  ];

  return (
    <ul className="list-unstyled">
      {categories.map((item, index) =>
        item.type === "category"
          ? renderCategory(item.name, item.subCategories)
          : (
            <li key={index}>
              <a href={item.href || "#"}>{item.name}</a>
            </li>
          )
      )}
    </ul>
  );
}

export default OtherTech;
