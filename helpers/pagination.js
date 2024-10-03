module.exports = (objectPagination, query, countProducts) => {
      if (query.page) {
        // used to change value of query.page from string to number
        objectPagination.currentPage = parseInt(query.page);
      }
      // calc the list need to skip 
      objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems; // calc page = (page - 1) * item page
      
      // calc all page with total products 
      const totalPage = Math.ceil(countProducts / objectPagination.limitItems); // math ceil : lam tron len
    
      // link total page in objectPagination to use for pug
      objectPagination.totalPage = totalPage; // used to link to pug

      return objectPagination;
}