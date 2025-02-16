import Cookies from "js-cookie";
export const postMutables = async (mutablesData) => {
  let errorResponse;
  try {
    const token = Cookies.get("access_token");
    const response = await fetch(
      "https://rafal-maslowski-backend-f60x.onrender.com/editMutablesTest",

      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mutablesData),
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
