

//Mostrar y Ocultar Caja
$(function () {
  $("#anclaAcce").click(function (e) { 
    e.preventDefault();
      $("#anclaBox").css("display", "flex");
  });
  $("#cerrar").click(function (e) { 
    e.preventDefault();
    $("#anclaBox").css("display", "none");
  });
});


//Menu

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Efecto scroll

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})


//Codigo para reproducir y parar video
$(document).ready(function () {
    $(".play-btn .play-img").on('click', function () {
        $(".play-img").fadeOut();
        $(".pause-img").fadeIn();
        $("#video")[0].play();
    });

    $(".play-btn .pause-img").on('click', function () {
        $(".pause-img").fadeOut();
        $(".play-img").fadeIn();
        $("#video")[0].pause();
    });
});


//slider
$('.slider').slick({
    vertical: true,
    dots:true,
    accessibility: true,
});




//Seccion sobre nosotros
$(document).ready(function () {
    $(".more-btn").click(function (e) { 
        e.preventDefault();
        $(this).parent().parent().find(".more-text").toggleClass("active")
    });

});


//formulario
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//Menu Accesibilidad

//Codigo para aumentar y disminuir
$(function () {
  let control = false;
  let control2 = 0;
  $("#AumenDismi").click(function (e) { 
    e.preventDefault();
    let p1 = $("#content1 p").css("fontSize");
    let p2 = $(".caption p").css("fontSize");
    let p3 = $(".card p").css("fontSize");
    let p4 = $(".more-text p").css("fontSize");
    let p5 = $(".social-media p").css("fontSize");

    if(control == false){
      if(control2 <= 1){
        p1 = parseInt(p1)+2+"px";
        p2 = parseInt(p2)+2+"px";
        p3 = parseInt(p3)+2+"px";
        p4 = parseInt(p4)+2+"px";
        p5 = parseInt(p5)+2+"px";

      
        $("#content1 p").css("fontSize", p1);
        $(".caption p").css("fontSize", p2);
        $(".card p").css("fontSize", p3);
        $(".more-text p").css("fontSize", p4);
        $(".social-media p").css("fontSize", p5);
        control2 = control2 + 1;
      }else{
         control = true;
      }
       
      
    }else if(control == true){
      if(control2 >= 1){
        p1 = parseInt(p1)-2+"px";
        p2 = parseInt(p2)-2+"px";
        p3 = parseInt(p3)-2+"px";
        p4 = parseInt(p4)-2+"px";
        p5 = parseInt(p5)-2+"px";

      
        $("#content1 p").css("fontSize", p1);
        $(".caption p").css("fontSize", p2);
        $(".card p").css("fontSize", p3);
        $(".more-text p").css("fontSize", p4);
        $(".social-media p").css("fontSize", p5);
        control2 = control2 - 1;
    }else{
      control = false;
    }
  
  }
  });
});


//Espaciado de letra
$(document).ready(function () {
  let control = false;
  $("#AumenEsp").click(function (e) { 
    e.preventDefault();
    if(control == false){
      $("p").css("letterSpacing", "1.5px");
      control = true;
    }else{
      $("p").css("letterSpacing", "normal");
      control = false
    }
  });
});


//Invertir Colores
  $(document).ready(function () {
    let control = false;
    $("#InvertColor").click(function (e) { 
      e.preventDefault();
      if(control == false){
        $("html").css("filter", "invert(100%)");
        control = true;
      }else{
        $("html").css("filter", "none");
        control = false
      }
    });
  });


  //Blanco Y Negro
  $(document).ready(function () {
    let control = false;
    $("#BN").click(function (e) { 
      e.preventDefault();
      if(control == false){
        $("html").css("filter", "grayscale(100%)");
        control = true;
      }else{
        $("html").css("filter", "none");
        control = false
      }
    });
  });


  //Subrayar Vinculos
  $(document).ready(function () {
    let control = false;
    $("#SubV").click(function (e) { 
      e.preventDefault();
      if(control == false){
        $("a").css("textDecoration", "underline 5px yellow");
        control = true;
      }else{
        $("a").css("textDecoration", "none");
        control = false
      }
    });
  });

  //Subrayar Titulos
  $(document).ready(function () {
    let control = false;
    $("#SubT").click(function (e) { 
      e.preventDefault();
      if(control == false){
        $("h1, h2, h3, h4").css("textDecoration", "underline 5px red");
        control = true;
      }else{
        $("h1, h2, h3, h4").css("textDecoration", "none");
        control = false
      }
    });
  });

