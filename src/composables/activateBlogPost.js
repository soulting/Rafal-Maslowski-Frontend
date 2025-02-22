import Cookies from "js-cookie";
export const activateBlogPost = async (postID) => {
  let errorResponse;
  try {
    const token = Cookies.get("access_token");
    const response = await fetch(
      `https://rafal-maslowski-backend-f60x.onrender.com/activateBlogPost?id=${postID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      errorResponse = await response.json();
      throw new Error("could't change the post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
