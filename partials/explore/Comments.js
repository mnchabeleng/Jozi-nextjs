import Image from 'next/image'
import { useState, useEffect } from 'react'

const Comments = ({ comments: data }) => {
    const [comments, setComments] = useState([])
    const [page, setPage] = useState(1)

    function paginateArray(page_number) {
        const array = data.data
        const page_size = 5
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    useEffect(() => {
        setComments(prev => [...prev, ...paginateArray(page)])
    }, [page])

    return (
        data.count > 0 && (
           <div className="listing-comments">
            <h3 className="comments-title">{ comments.count } Comment{ comments.count > 1 && 's' }</h3>
                {
                    comments.map((comment, index) => (
                        <div key={ index } className="d-flex" id="comment">
                            <div className="flex-shrink-0">
                                <Image loader={ ({ src }) => src } src={ comment.user.avatar } className="img-thumbnail rounded" width="60" height="60" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="comment-user">{ comment.user.name }</h5>
                                <small className="comment-time">{ comment.time }</small>
                                <p className="comment-text">{ comment.comment }</p>
                            </div>
                        </div>
                    ))
                }
                {
                    comments.length < data.count && (
                        <button className="btn btn-secondary rounded-pill" onClick={ () => setPage(prev => prev + 1) }>Loadmore</button>
                    )
                }
           </div>
        )
    )
}

export default Comments