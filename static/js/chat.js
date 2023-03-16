var gMsgList = document.getElementById("msgList");

$(function () {
  insertSendMsg("你好");
  insertReplyMsg("您好!");

  $("#sendMessage").on("tap", function () {
    var msg = $("#inputText").val();
    insertSendMsg(msg);

    $("#inputText").val("");
    gMsgList.scrollTop = gMsgList.scrollHeight + gMsgList.offsetHeight;

    $.ajax({
      type: "post",
      url: "http://127.0.0.1:3100/chat",
      data: JSON.stringify({ chat: msg }),
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        insertReplyMsg(data);
      },
    });
  });
});

function insertSendMsg(msg) {
  var html =
    '<li class="im-chat-mine">' +
    '<div class="im-chat-user">' +
    '<img src="static/img/user.webp"/>' +
    "<cite><i>" +
    getFormatDate() +
    "</i></cite>" +
    "</div>" +
    '<div class="im-chat-text">' +
    msg +
    "</div>" +
    "</li>";
  gMsgList.insertAdjacentHTML("beforeEnd", html);
}

function insertReplyMsg(msg) {
  var html =
    "<li>" +
    '<div class="im-chat-user">' +
    '<img src="static/img/zhg.png"/>' +
    "<cite>智鹤ChatGPT<i>" +
    getFormatDate() +
    "</i></cite>" +
    "</div>" +
    '<div class="im-chat-text">' +
    msg +
    "</div>" +
    "</li>";
  gMsgList.insertAdjacentHTML("beforeEnd", html);
}

function getFormatDate() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month =
    nowDate.getMonth() + 1 < 10
      ? "0" + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1;
  var date =
    nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
  var hour =
    nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
  var minute =
    nowDate.getMinutes() < 10
      ? "0" + nowDate.getMinutes()
      : nowDate.getMinutes();
  var second =
    nowDate.getSeconds() < 10
      ? "0" + nowDate.getSeconds()
      : nowDate.getSeconds();
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
}
