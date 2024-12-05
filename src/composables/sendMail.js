export const sendMail = async (mailData) => {
  let errorResponse;
  try {
    const response = await fetch(
      "https://rafal-maslowski-backend-4.onrender.com/sendMail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailData),
      }
    );
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Error: ${errorResponse.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
