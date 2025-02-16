export const getBlogPost = async (blogPost) => {
  let errorResponse;
  try {
    const response = await fetch(
      `https://rafal-maslowski-backend-f60x.onrender.com/getBlogPost?id=${blogPost.value.id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      errorResponse = await response.json();
      throw new Error("Could't download the blog post");
    }

    blogPost.value.post = await response.json();
  } catch (error) {
    console.error(error);
    return errorResponse;
  } finally {
    blogPost.value.isLoading = false;
  }
};
