import React from 'react'

const PageNavigation = ({page, total, onPrevious, onNext}) => {
  return (
    <div>
        <button onClick={onPrevious} disabled={page<=1}>
            Previous

        </button>

        <p>
            Page {page} of {total}
        </p>

        <button onClick={onNext} disabled={page >= total}>
            Next
        </button>
    </div>
  )
}

export default PageNavigation