/**
 * Created by sunny_000 on 2014/11/27.
 */
$(function(){

    //注册登陆按钮事件
    $('#loginBtn').click(function(){
        doLogIn();
    });
});

/*****************用户登录操作****************/
//用户登录
function doLogIn(){
    $.ajax({
        url:'http://192.168.1.117:8888/DHEMS/login',
        type:'post',
        data:{'loginName':$('#uname').val(),'password':$('#psw').val(),'methodName':'login'},
        dataType:'json',
        success:function(data, textStatus){
            if(data.errorID == 0){
                $('#logInWin').window('close');
                $('#logInUser').text(data.logInInfo.userName);
            }else{
                $.messager.alert('登录提示','用户名或密码错误，请重试!','error');
            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrom){
            $.messager.alert('登录提示','服务器未响应你的请求，请重试!','error');
        }
    });
}
