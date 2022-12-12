fetch("http://localhost:3000/comments")
.then(res => res.json())
.then(data => console.log(data))