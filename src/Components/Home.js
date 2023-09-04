import React, { useContext, useEffect } from "react";

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import getFetchData from "../redux/actions/getAction";
import { useState } from "react";
import HistoryContext from "../context/HistoryContext";

const Home = () => {
  const { history, setHistory } = useContext(HistoryContext);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  // useEffect(() => {
  //   console.log("data changed")
  //   if (data.length !== 0) {
  //     setHistory([...history, data]);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   dispatch(getFetchData("sun"));
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="searchCls">
        <div>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Search for word..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button
            className=""
            onClick={() => {
              dispatch(getFetchData(input));
              setHistory([...history, input]);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="details_margin">
        {data &&
          data.map((data, idx) => (
            <div className="wordDetails_cla" key={idx}>
              <h2>{data.word}</h2>

              {/* audio section */}
              {data.phonetics.map((phonetic, idx) => (
                <React.Fragment key={idx}>
                  <p>{phonetic.text}</p>

                  <audio controls>
                    <source src={phonetic.audio} type="audio/mp3" />
                  </audio>
                </React.Fragment>
              ))}
              {data.meanings.map((data, idx) => (
                <React.Fragment key={idx}>
                  <p>{data.partOfSpeech}</p>
                  <p>{data.definitions[0].definition}</p>
                </React.Fragment>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
