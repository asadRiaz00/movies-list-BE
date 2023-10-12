function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    rows.map((row) => {
        row.rating = row.rating.toFixed(2).replace(/[.,]00$/, "");
        row.duration = row.duration.toFixed(2).replace(/[.,]00$/, "");
        return row;
    }
    );
    return rows;
  }
  
  module.exports = {
    getOffset,
    emptyOrRows
  }