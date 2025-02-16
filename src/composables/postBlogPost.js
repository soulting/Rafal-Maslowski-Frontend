import Cookies from "js-cookie";
export const postBlogPost = async (postData) => {
  let errorResponse;
  try {
    const token = Cookies.get("access_token");
    const response = await fetch(
      "https://rafal-maslowski-backend-f60x.onrender.com/postBlogPostTest",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    if (!response.ok) {
      errorResponse = await response.json();
      throw new Error("Could't send the new post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
