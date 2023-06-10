const api = {
  fetchRandomMessage: async () => {
    const response = await fetch('http://localhost:3000/api/v1/greets');
    const { text } = await response.json();

    return text;
  },
};
export default api;
