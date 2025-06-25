const Pagination = props => {
  const {currentPage, onPageChange} = props
  return (
    <div style={{textAlign: 'center', marginBottom: '2rem'}}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀ Prev
      </button>
      <span style={{margin: '0 1rem'}}>Page {currentPage}</span>
      <button type="button" onClick={() => onPageChange(currentPage + 1)}>
        Next ▶
      </button>
    </div>
  )
}

export default Pagination
