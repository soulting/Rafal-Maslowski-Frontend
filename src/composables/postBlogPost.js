const postBlogPost = async (postData) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/postBlogPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Could't send the new post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postBlogPost;
