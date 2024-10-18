import React, { useState } from 'react';
import USERS_MOCK_DATA from './USERS_MOCK_DATA.json';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import _ from 'lodash';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const UsersTable = ({ users2 }) => {
  const { isOptionsOpen, optionPosition, setIsOptionOpen, setOptionsPosition } = useGlobalContext();
  const [users] = useState(USERS_MOCK_DATA); // No need for setUsers if we are using users2
  const [count] = useState(users2.length);
  const [numberOfColumns] = useState(12); // Number of users per page
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(count / numberOfColumns);
  const [selectedUser, setSelectedUser] = useState(null); // To handle user for the options dropdown

  const paginate = (items) => {
    const startIndex = (currentPage - 1) * numberOfColumns;
    return _(items).slice(startIndex).take(numberOfColumns).value();
  };

  const paginatedUsers = paginate(users2);

  // Pagination logic to display pages
  const getPageNumbers = () => {
    let startPage = 1;
    let endPage = pagesCount;
    const maxPagesToShow = 6;

    if (pagesCount > maxPagesToShow) {
      if (currentPage <= 3) {
        endPage = maxPagesToShow;
      } else if (currentPage + 2 >= pagesCount) {
        startPage = pagesCount - maxPagesToShow + 1;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const openOptions = (event, user) => {
    const rect = event.target.getBoundingClientRect();
    setOptionsPosition({
      top: rect.top,
      left: rect.left,
    });
    setSelectedUser(user); // Set the current user for options
    setIsOptionOpen(true);
  };

  const closeOptions = () => {
    setIsOptionOpen(false);
  };

  const onPageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pagesCount) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email address</th>
            <th>Total Events</th>
            <th>Total Tickets Sold</th>
            <th>Total Amount Made</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.user.id}>
              <td>{user.user.first_name}</td>
              <td>{user.user.email}</td>
              <td>{user.totalEvents}</td>
              <td>{user.totalSold}</td>
              <td>₦{user.user.account_balance + user.withdraw_total}</td>
              <td onClick={(e) => openOptions(e, user)} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#3A3A3A" strokeWidth="1.5" />
                  <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#3A3A3A" strokeWidth="1.5" />
                  <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#3A3A3A" strokeWidth="1.5" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOptionsOpen && selectedUser && (
        <div
          className="toggle show-sort"
          style={{
            position: 'absolute',
            top: optionPosition.top + window.scrollY - 50,
            left: optionPosition.left + window.scrollX - 100,
          }}
        >
          <ul onClick={closeOptions}>
            <li>
              <Link to={`/admin/users/${selectedUser.user.id}`} className='link'>View Profile</Link>
            </li>
            <li>
              <Link to="#" className='link'>Message User</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Pagination */}
      <div className='pagination'>
        <ul>
          <li 
            className={currentPage === 1 ? 'page disabled left' : 'page left'}
            onClick={() => onPageChange(currentPage - 1)}
          >  
            <GrLinkPrevious />
            Previous
          </li>

          {pageNumbers.map((page, index) => (
            <React.Fragment key={page}>
              <li 
                className={page === currentPage ? 'page current' : 'page'}
                onClick={() => onPageChange(page)}
              >
                {page}
              </li>
              {index < pageNumbers.length - 1 && pageNumbers[index + 1] !== page + 1 && (
                <li className='page' key={`ellipsis-${index}`}>...</li>
              )}
            </React.Fragment>
          ))}

          <li 
            className={currentPage === pagesCount ? 'page disabled right' : 'page right'}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
            <GrLinkNext />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsersTable;
