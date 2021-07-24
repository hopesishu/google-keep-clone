import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//handlers for routes
export const getPosts = async (req, res) => {
    //retrieve all the posts in database
    try {
        const postMessages = await PostMessage.find().sort({ createdAt: "desc" });
        res.status(200).json(postMessages); //returns array of messages
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params; //extracting id and renaming id to _id
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id'); 
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id'); 

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully"});
}