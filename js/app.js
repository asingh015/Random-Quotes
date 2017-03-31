 let fetch = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};
 var Qt = '';
var At = '';

function newQuote() {
    fetch({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=' }).then(function (data) {
        var res = JSON.parse(data);
        Qt = res.quote;
        At = res.author;

         document.getElementById("text").innerHTML = Qt;
         document.getElementById("author").innerHTML = At;
    }).catch(function (error) {
        console.log(error);
    });
}
newQuote();

document.getElementById("twitter").addEventListener("click", function(){
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + Qt + '" ' + At));
});
document.getElementById("quote").addEventListener("click", function(){
    newQuote();
});
