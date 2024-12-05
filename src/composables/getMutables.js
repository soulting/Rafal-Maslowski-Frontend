export const getMutables = async () => {
  let errorResponse;
  try {
    const response = await fetch("http://127.0.0.1:5000/getMutables", {
      method: "GET",
    });
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
