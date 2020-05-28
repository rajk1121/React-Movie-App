const paginate = (array, pageSize, currentPage) => {
    let si = (currentPage - 1) * pageSize;
    let ei = si + pageSize;
    return array.slice(si, ei);
}

export default paginate;