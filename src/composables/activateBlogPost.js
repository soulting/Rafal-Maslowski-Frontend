export const activateBlogPost = async (postID) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/activateBlogPost?id=${postID}`,
      {
        method: "PUT",
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
