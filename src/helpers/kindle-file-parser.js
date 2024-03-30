import { v4 as uuid } from "uuid";

const BOUNDARY = "==========";
const REGEX_PATTERN_BOOK_NAME = /^(.*?)\s*\((.*?)\)$/;
const REGEX_PATTERN_DATETIME =
  /Added on (\w+), (\d+) (\w+) (\d+) (\d+:\d+:\d+)/;

export const praseKindleMyClippingFile = (content) => {
  const sections = getSections(content);
  const clips = [];
  sections.forEach((section) => {
    const clip = getClip(section);
    if (clip !== null) clips.push(clip);
  });
  return clips;
};

const getClip = (section) => {
  const lines = section.split("\r\n").filter((item) => item !== "");

  if (lines.length !== 3) return null;

  const { bookName, author } = getBookDetails(lines[0]);
  const id = uuid();
  return {
    id,
    bookName,
    author,
    highlight: lines[2],
    datetime: getDateTime(lines[1]),
  };
};

const getDateTime = (lineData) => {
  console.log(lineData.match(REGEX_PATTERN_DATETIME));
  return lineData.match(REGEX_PATTERN_DATETIME).join(" ");
};

const getBookDetails = (lineData) => {
  if (lineData === undefined) return {};
  const bookName = lineData.match(REGEX_PATTERN_BOOK_NAME)[1];
  const author = lineData.match(REGEX_PATTERN_BOOK_NAME)[2];
  return {
    bookName,
    author,
  };
};

const getSections = (content) => {
  return content.split(BOUNDARY);
};
