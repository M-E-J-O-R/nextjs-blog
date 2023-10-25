import { comments } from "../../../data/comments";

export default function handler(req, res) {

    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const userComment = req.body.userComment;
        const newUserComment = {
            id: Date.now(),
            text: userComment
        };
        comments.push(newUserComment)
        res.status(201).json(newUserComment);

    }



}