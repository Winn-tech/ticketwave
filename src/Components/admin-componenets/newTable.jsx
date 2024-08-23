import React, { useState } from 'react';
import '../../styles/pagination.css'
import '../../styles/tables.css'
import MOCK_DATA from './MOCK_DATA.json';
import _ from 'lodash';
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const NewTable = () => {
    
    const [data, setData] = useState(MOCK_DATA);
    const [count, setCount] = useState(data.length);
    const [numberOfColumns, setNumberOfColumns] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesCount = Math.ceil(count / numberOfColumns);
    
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const paginate = (items) => {
        const startIndex = (currentPage - 1) * numberOfColumns;
        return _(items).slice(startIndex).take(numberOfColumns).value();
    };

    const paginatedData = paginate(data);

    // Pagination logic to display 4 pages at a time with ellipses
    const getPageNumbers = () => {
        let startPage = 1;
        let endPage = pagesCount;
        const maxPagesToShow = 4;

        if (pagesCount > maxPagesToShow) {
            if (currentPage <= 2) {
                endPage = maxPagesToShow;
            } else if (currentPage + 1 >= pagesCount) {
                startPage = pagesCount - maxPagesToShow + 1;
            } else {
                startPage = currentPage - 1;
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

    return ( 
        <>
            {/* <h3>There are <span>{count}</span> orders</h3> */}
            
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Name</th>
                        <th>Email address</th>
                        <th>Ticket Name</th>
                        <th>Event Category</th>
                        <th>Payment Option</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((singleOrder) => {
                        const { id, first_name, email, event_category, payment_option, ticket_fee } = singleOrder;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{first_name}</td>
                                <td>{email}</td>
                                <td>{ticket_fee}</td>
                                <td>{event_category}</td>
                                <td>{payment_option}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='pagination'>
                <ul>
                    <li 
                        className={currentPage === 1 ? 'page disabled' : 'page'}
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    >  
                        <GrLinkPrevious/>
                        Previous
                    </li>

                    {pageNumbers.map((page, index) => {
                        return (
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
                        );
                    })}

                    <li 
                        className={currentPage === pagesCount ? 'page disabled' : 'page'}
                        onClick={() => currentPage < pagesCount && onPageChange(currentPage + 1)}
                    >
                        Next
                        <GrLinkNext/>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NewTable;
