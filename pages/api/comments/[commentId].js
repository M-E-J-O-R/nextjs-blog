import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const { commentId } = req.query;
    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    if (req.method === 'GET') {
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const indexOfComment = comments.findIndex((comment) => comment.id === parseInt(commentId));
        comments.splice(indexOfComment, 1);
        res.status(200).json(comment);
    }

}
