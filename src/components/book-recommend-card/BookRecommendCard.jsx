import BulbIcon from "../../static/icons/bulb-icon.svg";
import BookCard from "../book-card/BookCard";
import "./BookRecommendCard.scss";

const BookRecommendCard = () => {
  return (
    <div className="book-recommend-card relative mt-6 flex flex-col rounded-md bg-white bg-clip-border p-4 text-gray-700">
      <div className="header flex justify-between">
        <span className="text-base font-semibold">Similar Books You Might Like</span>
        <img src={BulbIcon} alt="bulb-icon" />
      </div>
      <BookCard bookName={"The Intelligent Investor"} bookAuthor={"Benjamin Graham"} />
      <BookCard bookName={"The Intelligent Investor"} bookAuthor={"Benjamin Graham"} />
      <BookCard bookName={"The Intelligent Investor"} bookAuthor={"Benjamin Graham"} />
    </div>
  );
};

export default BookRecommendCard;
