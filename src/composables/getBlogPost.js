const getBlogPost = async (blogPost) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/getBlogPost?id=${blogPost.value.id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Could't download the blog post");
    }

    blogPost.value.post = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    blogPost.value.isLoading = false;
  }
};

export default getBlogPost;
