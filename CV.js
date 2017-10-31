$(document).ready(function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getUTCDate();

    var monthWord = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var i = month;
    $('#monthDate').text(monthWord[i]);
    $('#dayDate').text(day);
    $('#yearDate').text(year);
    
    $('#close').on('click', cvClick);
    function cvClick(){
    $('.CV').hide(100);
    }
  $('#fifthMenu').on('click', cvClickOp);
    function cvClickOp(){
    $('.CV').show(50);
        $('.skills').hide(100);
        $('#Education').hide(100);
        $('#myHobby').hide(100);
    } 
    
    $('#close2').on('click',skillsClick);
    function skillsClick(){
        $('.skills').hide(100);
    }
  $('#thirdMenu').on('click',skillsClickOp);
    function skillsClickOp(){

        $('.skills').show(50);
          $('#htMl5').animate({ width: '350' }, 1500);
        $('#cSs3').animate({width:'250'},1500);
        $('#jquEry').animate({width:'200'},1500);
        $('#cpLus').animate({width:'150'},1500);
        $('#english').animate({width:'250'},1500);
        $('#russian').animate({width:'400'},1500);
        $('#ukrainian').animate({width:'400'},1500);
        $('#polish').animate({width:'350'},1500);
        $('.CV').hide(100);
        $('#Education').hide(100);
        $('#myHobby').hide(100);
    };

 $('#close3').on('click',hobbyClick);
    function hobbyClick(){
        $('#myHobby').hide(100);
    }
 $('#firstMenu').on('click',hobbyClickOp);
    function hobbyClickOp(){
        $('#myHobby').show(50);
        $('.CV').hide(100);
        $('#Education').hide(100);
        $('.skills').hide(100);
    }
    $('#photoFirstHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg');
        
        $('#photoFirstHobby').attr('src','fotoHobby/first.jpg');
    });
    
        $('#photoSecondHobby').on('click',function (){
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg');  
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
            
        $('#photoSecondHobby').attr('src','fotoHobby/second.jpg');
    });
        $('#photoThirdHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoForthHobby').attr('src','fotoHobby/forthBlack.jpg'); 
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
        
        $('#photoThirdHobby').attr('src','fotoHobby/third.jpg');
    });
        $('#photoForthHobby').on('click',function (){
        $('#photoSecondHobby').attr('src','fotoHobby/secondBlack.jpg');
        $('#photoThirdHobby').attr('src','fotoHobby/thirdBlack.jpg');  
        $('#photoFirstHobby').attr('src','fotoHobby/firstBlack.jpg');
            
        $('#photoForthHobby').attr('src','fotoHobby/forth.jpg'); 
    });
      
    $('video').on('mouseover',function () {
        this.play();
        
    });
    $('video').on('mouseleave',function(){
        this.pause();
    });
    
    
     $('#close4').on('click',educationClick);
    function educationClick(){
        $('#Education').hide(100);
    }
 $('#forthMenu').on('click',educationClickOp);
    function educationClickOp(){
        $('#Education').show(50);
        $('.CV').hide(100);
        $('#myHobby').hide(100);
        $('.skills').hide(100);
    }
    
    
    
    

});
