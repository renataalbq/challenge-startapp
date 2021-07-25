import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './style.css'


const Pagination = ({limit, total, currentPage=1, onPageChange}) => {
    const totalPages = Math.ceil(total / limit);
    const hasPrevPage = currentPage > 1
    const hasNextPage = currentPage < totalPages

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    
    return (
        <div className="container-pages">
            <div className="pagination">

                {hasPrevPage && (
                    <div className="page-item">
                        <button className="end-button" onClick={() => onPageChange(1)}>
                            First Page
                        </button>
                    </div>
                )}

                <div className="page-item">
                    <button 
                    className="arrow-button" 
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage < 1}>
                        <NavigateBeforeIcon style={{fontSize: 30 }} />
                    </button>
                </div> 
                
                
                <div className="page-item">
                    <button 
                        className="arrow-button"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <NavigateNextIcon style={{ fontSize: 30 }} />
                    </button>
                </div>
                {hasNextPage && (
                    <div className="page-item">
                        <button className="end-button" onClick={() => onPageChange(totalPages)}>
                            Last Page
                        </button>
                  </div>
                )}
            </div>
        </div>
    );
};

export default Pagination;
