import React, { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
import TableOfContents from "./TableofContents";

const options = {
  overrides: {
    h1: {
      component: 'h1',
      props: {
        className: 'text-4xl font-bold mb-4'
      }
    },
    h2: {
      component: 'h2',
      props: {
        className: 'text-3xl font-bold mb-3'
      }
    },
    h3: {
      component: 'h3',
      props: {
        className: 'text-2xl font-bold mb-2'
      }
    }
  }
};

function BlogContent() {
  const fileName = "my.md";
  const [post, setPost] = useState("");
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    fetch(`/${fileName}`)
      .then((res) => res.text())
      .then((res) => {
        setPost(res);
        extractHeadings(res);
      })
      .catch((err) => console.log(err));
  }, [fileName]);

  const extractHeadings = (markdown) => {
    const lines = markdown.split('\n');
    const headings = [];

    lines.forEach(line => {
      const match = line.match(/^(#{2,3})\s+(.*)/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/\s+/g, '-');
        headings.push({ text, level, id });
      }
    });

    console.log("Extracted Headings:", headings); // Debug log
    setHeadings(headings);
  };

  return (
    <div className="flex">
      <div className="w-4/5 p-4">
        <MarkDown options={options}>{post}</MarkDown>
      </div>
      <div className="w-1/5 p-4">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}

export default BlogContent;
