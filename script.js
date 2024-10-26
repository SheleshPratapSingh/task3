
const apiUrl = ' https://chimpu.online/api/post.php';
const data = { phonenumber: '' };

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => {
    let headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    console.log(headers);
    
    document.getElementById('header-output').innerText = JSON.stringify(headers, null, 2);
})
.catch(error => console.error('Error:', error));
