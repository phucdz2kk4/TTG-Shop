module.exports = (query) => {
    
    let objectSearch = {
        keyword: ""
    }

    if (query.keyword) {
        objectSearch.keyword = query.keyword;
        
        const regex = new RegExp(objectSearch.keyword, "i"); // syntax regex
        objectSearch.title = regex;
    }
    return objectSearch;
}