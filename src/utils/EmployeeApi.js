export const BASE_URL = "https://api.autocomplete.avidalal.net";


export const getEmployees = () => {
    return fetch(`${BASE_URL}/employees`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      })
  };

  function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
  
    return Promise.reject(`Error: ${res.status}  ${res.statusText}`);
  }
  