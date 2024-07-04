import React from "react";

function TableOfContents({ headings }) {
  console.log("Headings in TOC:", headings); // Debug log
  return (
    <div className="sticky top-4">
      <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
      <ul className="list-disc list-inside">
        {headings.map((heading, index) => (
          <li key={index} className={`ml-${heading.level === 3 ? 4 : 0}`}>
            <a href={`#${heading.id}`} className="text-blue-500 hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
