import { useEffect, useState } from "react";
import { getStoreData, Stores } from "../../db/index";
import "./Highlights.scss";

const Highlights = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getStoreData(Stores.Highlights);
      setHighlights(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="highlights">
        <div className="left-section">
          <div className="search m-4 flex max-w-sm">
            <input className="h-12 max-h-12 w-full px-4 py-1 text-base" type="search" placeholder="Search" />
          </div>
          <div className="book-list">
            {highlights &&
              highlights.map((highlight) => (
                <div key={highlight.id} className="book-container flex-row items-center justify-center text-center">
                  <div className="cover"></div>
                  <div className="book-name mx-4">{highlight.bookName}</div>
                  <div className="book-author mx-4 my-1">{highlight.author}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="right-section">Test</div>
      </div>
    </>
  );
};

export default Highlights;
