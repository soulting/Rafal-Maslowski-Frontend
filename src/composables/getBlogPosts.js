export const getBlogPosts = async () => {
  try {
    const response = await fetch(
      "https://rafal-maslowski-backend-4.onrender.com/getBlogPosts",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Could't fetch the posts");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
