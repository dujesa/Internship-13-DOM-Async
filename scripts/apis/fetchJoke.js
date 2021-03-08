async function fetchJoke() {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "My Homework project (https://github.com/dujesaric/Internship-13-DOM-Async)",
      },
    });

    const newJoke = await response.json();

    return newJoke;
  } catch (fetchError) {
    console.log(fetchError);
  } finally {
  }
}
