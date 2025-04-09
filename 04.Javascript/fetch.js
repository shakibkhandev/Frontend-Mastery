// 1. Basic GET Request
async function basicGet() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const output = document.getElementById("basicGetOutput");
    output.innerHTML = `
            <h3>First 3 Posts:</h3>
            ${data
              .slice(0, 3)
              .map(
                (post) => `
                <div style="margin-bottom: 10px;">
                    <strong>${post.title}</strong>
                    <p>${post.body}</p>
                </div>
            `
              )
              .join("")}
        `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "basicGetOutput"
    ).innerHTML = `Error: ${error.message}`;
  }
}

// 2. POST Request
async function createPost() {
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    document.getElementById("postOutput").innerHTML = `
            <h3>Created Post:</h3>
            <div>
                <strong>${data.title}</strong>
                <p>${data.body}</p>
                <p>Post ID: ${data.id}</p>
            </div>
        `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("postOutput").innerHTML = `Error: ${error.message}`;
  }
}

// 3. Error Handling
async function errorHandling() {
  try {
    // This URL will return a 404 error
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("errorOutput").innerHTML = "Success!";
  } catch (error) {
    document.getElementById("errorOutput").innerHTML = `
            <div style="color: red;">
                <h3>Error Caught:</h3>
                <p>${error.message}</p>
            </div>
        `;
  }
}

// 4. Fetch with Headers
async function fetchWithHeaders() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "Custom Value",
          Authorization: "Bearer token123",
        },
      }
    );

    const data = await response.json();
    document.getElementById("headersOutput").innerHTML = `
            <h3>Response with Custom Headers:</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
            <p>Status: ${response.status}</p>
            <p>Headers used:</p>
            <ul>
                <li>Content-Type: application/json</li>
                <li>X-Custom-Header: Custom Value</li>
                <li>Authorization: Bearer token123</li>
            </ul>
        `;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "headersOutput"
    ).innerHTML = `Error: ${error.message}`;
  }
}
