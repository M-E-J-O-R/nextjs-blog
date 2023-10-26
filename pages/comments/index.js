import { useState } from "react";

const CommentPage = () => {
    const [commentData, setCommentData] = useState([]);
    const [userComment, setUserComment] = useState('');

    const fetchComment = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setCommentData(data);
    };

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ userComment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

    };
    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data)
        fetchComment()
    };

    return (
        <main>
            <input type="text"
                value={userComment}
                onChange={(event => setUserComment(event.target.value))}
            />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComment}>Fetch comments</button>
            {commentData.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p> <b> {comment.id}</b> {comment.text}</p>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </div>


                );
            })}

        </main>
    );
};

export default CommentPage;