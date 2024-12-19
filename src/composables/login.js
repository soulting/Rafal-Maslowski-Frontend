export const login = async (loginData) => {
  let errorResponse;
  try {
    const response = await fetch(
      "https://rafal-maslowski-backend-f60x.onrender.com/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      }
    );
    if (!response.ok) {
      errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
