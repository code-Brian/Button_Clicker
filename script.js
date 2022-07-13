function changeLogStatus(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else if (element.innerText == "Logout"){
        element.innerText = "Login";
    }
}

let likes = 0;

function addLike(element) {
    likes++;
    if (likes == 1) {
        alert("Ninja was liked!");
        element.innerText = `${likes} likes`;
    } else {
        element.innerText = `${likes} likes`;
    }
    return likes;
}