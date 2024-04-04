import "./BookCard.scss";

const BookCard = ({ img, bookName, bookAuthor }) => {
  return (
    <div className="book-card flex">
      <div className="cover"></div>
      <div className="book-info">
        <div className="book-name">{bookName}</div>
        <div className="book-author">{bookAuthor}</div>
        <div className="book-cta mt-2 text-sm">Want To Read</div>
      </div>
    </div>
  );
};

export default BookCard;
