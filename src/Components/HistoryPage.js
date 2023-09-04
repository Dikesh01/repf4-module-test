import React, { useContext } from "react";
import Navbar from "./Navbar";
import HistoryContext from "../context/HistoryContext";
import { Link } from "react-router-dom";
const HistoryPage = () => {
  const { history, _ } = useContext(HistoryContext);

  return (
    <>
      <Navbar />
      <div className="history_class">
        <h2>Search History</h2>
        {history &&
          history.map((search, idx) => (
            <ul className="ulClass">
              <li>
                <Link
                  to={`/${search}`}
                  key={idx}
                  className="underline mx-4 my-2 text-blue-700 w-min"
                >
                  {search}
                </Link>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default HistoryPage;
