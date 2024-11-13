export const editBlogPost = async (postID, blogPost) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/editBlogPost?id=${postID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
      }
    );
    if (!response.ok) {
      throw new Error("could't change the post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
