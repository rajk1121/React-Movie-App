import React from 'react';
function paginate(props) {
    const { itemsCount, currentPage, onPageChange, pageSize } = props;
    let noOfPages = Math.ceil(itemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= noOfPages; i++) {
        pages.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>

                {pages.map((page) => {
                    return (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a href='#' className='page-link' onClick={() => {
                                onPageChange(page)
                            }}>{page}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
       
    )
}
export default paginate;
