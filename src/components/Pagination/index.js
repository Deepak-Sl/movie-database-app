import './index.css'

const Pagination = props => {
  const {currentPage, onPageChange, totalPages} = props
  return (
    <div className="pagination-container">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <p>{currentPage}</p>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
