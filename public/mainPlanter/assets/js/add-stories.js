var addPostButton = document.querySelector('#addStories');
addPostButton.addEventListener('click', function() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const discription = document.getElementById("discription").value;
    const image = document.getElementById("image").value;
    // create data object
    const postData = {
            title: title,
            author: author,
            description: description
        }
        // AJAX
    var url = '/index';
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoad);
    oReq.open('POST', url);
    //Send the proper header information along with the request
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(postData));
});

function onLoad() {
    // clear form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    const discription = document.getElementById("discription").value;
    const image = document.getElementById("image").value;
    // redirect to main page
    window.location.href = '/';
}