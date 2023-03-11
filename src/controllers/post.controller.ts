import { Request, Response } from "express";
import { prisma } from "../server";

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newBlogPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    res.status(200).json(newBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const createPostAndComments = async (req: Request, res: Response) => {
  try {
    const { title, content, comments } = req.body;
    const newBlogPost = await prisma.post.create({
      data: {
        title,
        content,
        comments: {
          create: comments,
        },
      },
      include: {
        comments: true, // Include the comments in the response
      }
    });
    res.status(200).json(newBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await prisma.post.findMany();
    res.status(200).json(blogPosts);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPost = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(blogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateBlogPost = async (req: Request, res: Response) => {
  try {
    const { id, title, content } = req.body;
    const updatedBlogPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });
    res.status(200).json(updatedBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deletedBlogPost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllBlogPosts = async (req: Request, res: Response) => {
  try {
    const deletedBlogPosts = await prisma.post.deleteMany();
    res.status(200).json(deletedBlogPosts);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const likeBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const likedBlogPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        likesCount: {
          increment: 1,
        },
      },
    });
    res.status(200).json(likedBlogPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createBlogPost,
  createPostAndComments,
  getBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost,
  deleteAllBlogPosts,
  likeBlogPost,
};
