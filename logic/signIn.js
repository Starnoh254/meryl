console.log("Hapa buana");
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    const BASE_URL =
      "https://merryl-investments-backend.onrender.com/api/v1/member_login";
    console.log(email.value);
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data));
        window.location.href = "dashboard.html";
        console.log(data); // Process the data
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Invalid  Credentials");
      });
  });
