import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const data = {
    "Sorting Visualizer": [
      ["/sorting/mergesort", "Mergesort"],
      ["/sorting/selectionsort", "Selectionsort"],
      ["/sorting/bubblesort", "Bubblesort"],
      ["/sorting/insertionsort", "Insertionsort"],
      ["/sorting/quicksort", "Quicksort"],
    ],
    "Graph Visualizer": [
      ["/graph/breadthfirstsearch", "Breadth First Search"],
      ["/graph/depthfirstsearch", "Depth First Search"],
      ["/graph/minimumcostpath", "Minimum Cost Path"],
    ],
    "Tree Visualizer": [
      ["/tree/preordertraversal", "Preorder Traversal"],
      ["/tree/inordertranversal", "Inorder Traversal"],
      ["/tree/postordertraversal", "PostOrder Traversal"],
    ],
  };
  return (
    <div className="home">
      <div className="heading_top">DSA Visualizer</div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="each_object">
          <div className="heading">{key}</div>
          <div className="navbar">
            <div className="nav">
              {value.map((navitem, index) => (
                <Link to={navitem[0]} className="navItem" key={index}>
                  {navitem[1]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
