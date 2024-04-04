import HeartIcon from "../../static/icons/heart-icon.svg";
import TagIcon from "../../static/icons/tag-icon.svg";
import ShareIcon from "../../static/icons/share-icon.svg";
import DeleteIcon from "../../static/icons/delete-icon.svg";
import "./QuoteCard.scss";

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card relative mt-6 flex flex-col rounded-md bg-white bg-clip-border p-8 text-gray-700">
      <div className="text-base">{quote}</div>
      <div className="icons flex space-x-8 self-end p-4">
        <img src={HeartIcon} alt="fav-icon" />
        <img src={TagIcon} alt="fav-icon" />
        <img src={ShareIcon} alt="fav-icon" />
        <img src={DeleteIcon} alt="fav-icon" />
      </div>
    </div>
  );
};

export default QuoteCard;
