export const getBlogPosts = async () => {
  let errorResponse;
  try {
    const response = await fetch(
      "https://rafal-maslowski-backend-f60x.onrender.com/getBlogPosts",
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      errorResponse = await response.json();
      throw new Error("Could't fetch the posts");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
