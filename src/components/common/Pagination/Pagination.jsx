import React from 'react'
import s from './Pagination.module.css';

let Pagination = ({totalItemsCount, currentPage, onPageChanged, pageSize, halfPaginationSize = 4}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let minPage = currentPage - halfPaginationSize;
    if (minPage < 1) {
        minPage = 1;
    }

    let maxPage = currentPage + halfPaginationSize;
    if (maxPage > pagesCount) {
        maxPage = pagesCount;
    }

    let previousPage = currentPage - 1;
    if (previousPage < 1) {
        previousPage = 1;
    }

    let nextPage = currentPage + 1;
    if (nextPage > pagesCount) {
        nextPage = currentPage;
    }

    let pages = [];
    for(let i = minPage;i <= maxPage;i++) {
        let page = <a onClick={() => onPageChanged(i)} key={i} className={i === currentPage ? s.active : null}>{i}</a>;
        pages.push(page);
    }

    return (
        <div className={`${s.pagination}`}>
            <a onClick={() => onPageChanged(1)}>First</a>
            &nbsp;<a onClick={() => onPageChanged(previousPage)}>«</a>
            {pages}
            <a onClick={() => onPageChanged(nextPage)}>»</a>
            &nbsp;<a onClick={() => onPageChanged(pagesCount)}>Last</a>
        </div>
    )
}

export default Pagination