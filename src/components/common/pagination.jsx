/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const {onPageChange, itemsCount, currentPage, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return ( 
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => {
          return (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" 
              onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>)
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
}
 
export default Pagination;