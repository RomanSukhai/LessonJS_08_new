$(document).ready(function () {
    $('input[type=button]').bind('click',function () {
        var UserData={
            userName: $("#userName").val(),
            userSurname: $("userSurname").val(),
            userAge: $("#userAge").val(),
            userLives: $("#userLives").val(),
        }
        let flag = $("#userAge").val()>0 && $("#userAge").val()<100;
        if (flag) {
            $.ajax({
                type:'GET',
                data: JSON.stringify(UserData),
                contentType: 'application/json',
                url : 'http://localhost:3000/userGet?userName= & userAge=',
                success :function (data){
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            })
        }else{
            $("#userAge").val('Exception,please refoctor this value')
            $.ajax({
                type:'GET',
                data: JSON.stringify(UserData),
                contentType: 'application/json',
                url : 'http://localhost:3000/userGet?userName= & userAge=',
                success :function (data){
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            })
        }
        
    })
})