
(function () {
    fetch("http://localhost:3000/posts")
        .then(data => data.json())
        .then(res => console.log(res))
}())