//是否输入正确的手机号标识，如果为1则为正确的手机号，为0，则为不正确的手机号
var isPhone = 1;

function getCode(e) {

    checkphone(); //获取手机验证码

    if (isPhone) {
        resetCode();
    }


}
//检查手机号是否正确
function checkphone() {
    //获取手机验证码
    var phone = $("#phone").val();
    //手机验证码正则表达式
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;


    isPhone = 1;
    if (phone == "") {
        alert("请输入手机号");
        isPhone = 0;
        return;
    }
    //如果验证不通过，则执行请输入正确的手机号
    if (!reg.test(phone)) {
        alert("请输入正确的手机号");
        isPhone = 0;
        return;
    }
}
//输入正确手机号，获取验证码按钮发生变化
//倒计时
function resetCode() {
    //设定倒数时间总数60秒
    var jMinutes = 60;
    $("#getCode").hide();
    $("#resetCode").show();
    $("#resetCode em").html('60');

    Timer = setInterval(function() {
        jMinutes -= 1;
        if (jMinutes == 0) {
            clearInterval(Timer)
            $("#resetCode").hide();
            $("#getCode").show();
        } else {
            $("#resetCode em").html(jMinutes);
        }
    }, 1000)



}