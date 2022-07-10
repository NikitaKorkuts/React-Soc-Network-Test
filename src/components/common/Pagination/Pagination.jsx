import React from 'react'
import s from "../FindFriends.module.css";

let Pagination = ({totalUsersCount, currentPage, onPageChanged, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let minPage = currentPage - 3;
    if (minPage < 1) {
        minPage = 1;
    }

    let maxPage = currentPage + 3;
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
        let page = <a onClick={() => onPageChanged(i)} className={i === currentPage ? s.active : null}>{i}</a>;
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