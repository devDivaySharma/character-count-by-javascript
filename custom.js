$(document).ready(function(){
    $("#contentbox").keyup(function(){
        var box =$(this).val();
        var main = box.lenght*100;
        var value = (main / 123);
        var count = 123 - box.lenght;
        if(box.lenght <= 123){
            $("#count").html(count);
            $("#bar").animate({
                "width" : value+'%',
            },1);
        }else{
            alert('full');
        }
        return false;
    });
});