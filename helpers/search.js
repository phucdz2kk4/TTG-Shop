module.exports = (query) => {
  let objectSearch = {
    keyword: "",
    title: "",
  };

  if (query) {
    objectSearch.keyword = query.keyword; // = req.query.keyword;

    const regex = new RegExp(objectSearch.keyword, "i"); // syntax regex
    objectSearch.title = regex;
  }
  return objectSearch;
};
