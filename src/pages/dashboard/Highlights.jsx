import { useEffect, useState } from 'react';
import { getStoreData, Stores } from '../../db/index';
import QuoteCard from '../../components/quote-card/QuoteCard';
import BookRecommendCard from '../../components/book-recommend-card/BookRecommendCard';
import './Highlights.scss';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      const fetchData = async () => {
        const res = await getStoreData(Stores.Highlights);
        const items = {};
        if (res === null) {
          navigate('/upload-kindle-file');
        } else {
          res.forEach(item => {
            if (items[item.bookName]) {
              items[item.bookName].push(item);
            } else {
              items[item.bookName] = [];
              items[item.bookName].push(item);
            }
          });
          setData(items);
          setSelectedBook(res[0].bookName);
        }
      };
      fetchData();
    }
  }, [data, navigate]);

  const handleBookSelected = bookName => {
    setSelectedBook(bookName);
  };

  return (
    <>
      <div className="highlights">
        <div className="left-section">
          <div className="search flex max-w-sm bg-white bg-clip-border p-4 mt-2">
            <input
              className="h-12 max-h-12 w-full px-4 py-1 text-base rounded-lg"
              id="search"
              type="search"
              placeholder="Search"
            />
          </div>
          <div className="book-list cursor-pointer">
            {data &&
              Object.keys(data).map(key => (
                <div
                  key={data[key][0].id}
                  data-book-name={data[key][0].bookName}
                  className="book-container flex-row items-center justify-center text-center"
                  onClick={e => handleBookSelected(data[key][0].bookName)}
                >
                  <div className="cover"></div>
                  <div className="book-name mx-4">{data[key][0].bookName}</div>
                  <div className="book-author mx-4 my-1">
                    {data[key][0].author}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="right-section">
          <div className="quote-list mt-6">
            {data &&
              selectedBook &&
              data[selectedBook] &&
              data[selectedBook].map((item, index) => (
                <QuoteCard quote={item.highlight} index={index} />
              ))}
          </div>
          <BookRecommendCard />
        </div>
      </div>
    </>
  );
};

export default Highlights;
