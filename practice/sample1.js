function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("Data fetched");
        const data = "Sample Data";
        resolve(data);
    }, 1000);
  });
}

fetchData().then(function(data) {
    console.log("Processing data:", data);
}); // This is simple way of declaring async function instead of using callback and its similar to below await example

const data = await fetchData(); // This is simple way of declaring async function instead of using callback
console.log("Processing data:", data);