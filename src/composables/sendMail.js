export const sendMail = async (mailData) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Error: ${errorResponse.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};