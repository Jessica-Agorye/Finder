export const movies = async (url) => {
  try {
    const res = await fetch("https://freetestapi.com/api/v1/movies?limit=5");
    console.log(res);

    if (!res.ok) {
      throw new Error("Network reaponse is not Ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};
