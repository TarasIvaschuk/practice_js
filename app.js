const url = "https://jsonplaceholder.typicode.com/posts";

function sendHTTTPrequest(method, url, data) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 300) {
                return response.json(); /* to parse the raw response to json */
            } else {
                /* to see the error data we must first parse the data to JSON */
                return response.json().then((errData) => {
                    console.log("Error data", errData);
                    throw new Error("Something went wrong");
                });
            }
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Something wrong with the request sending...");
        });
}
async function retrieveBooks() {
    try {
        const bookCollection = await sendHTTTPrequest("GET", url);
        for (const book of bookCollection) {
            // append the book to DOM //todo
            console.log(book);
        }
    } catch (error) {
        alert("Something went wrong...Oops!");
    }
}

retrieveBooks("GET", url);

//todo
async function creatBook() {}
