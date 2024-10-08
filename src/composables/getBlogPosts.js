const getBlogPosts = async (postsHeaders) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/getBlogPosts", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Could't fetch the posts");
    }
    postsHeaders.value.posts = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    postsHeaders.value.isLoading = false;
  }
};
export default getBlogPosts;
