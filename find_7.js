 var b=document.getElementById("home");
var c=document.getElementById("about");
var d=document.getElementById("skill");
var e=document.getElementById("exp");
var f=document.getElementById("edu");
var g=document.getElementById("cert");
var h=document.getElementById("proj");
var i=document.getElementById("cont");
var a2=false;
var a3=false;
var a4=false;
var a5=false;
var a6=false;
var a7=false;
var a8=false;

//  b.addEventListener("mouseenter",function(){
//  if(a2==false)
//  {
// 	b.style.fontSize="25px";
	
//  }

//  });
//  b.addEventListener("mouseleave",function(){
//  	if(a2==false) 	{
// 	b.style.fontSize="20px";
	
//  	}
//  });
// c.addEventListener("mouseenter",function(){
// if(a3==false)
// {
// 	c.style.fontSize="25px";
// 	//c.style.color="#f1f1f1";
// }

// });
// c.addEventListener("mouseleave",function(){
// 	if(a3==false)
// 	{
// 	c.style.fontSize="20px";
// 	//c.style.color="#818181";
// 	}
// });
// e.addEventListener("mouseenter",function(){
// if(a4==false)
// {
// 	e.style.fontSize="25px";
// 	//e.style.color="#f1f1f1";
// }

// });
// e.addEventListener("mouseleave",function(){
// 	if(a4==false)
// 	{
// 	e.style.fontSize="20px";
// 	//e.style.color="#818181";
// 	}
// });
// f.addEventListener("mouseenter",function(){
// if(a5==false)
// {
// 	f.style.fontSize="25px";
// 	//f.style.color="#f1f1f1";
// }

// });
// f.addEventListener("mouseleave",function(){
// 	if(a5==false)
// 	{
// 	f.style.fontSize="20px";
// 	//f.style.color="#818181";
// 	}
// });
// g.addEventListener("mouseenter",function(){
// if(a6==false)
// {
// 	g.style.fontSize="25px";
// 	//g.style.color="#f1f1f1";
// }

// });
// g.addEventListener("mouseleave",function(){
// 	if(a6==false)
// 	{
// 	g.style.fontSize="20px";
// 	//g.style.color="#818181";
// 	}
// });
// h.addEventListener("mouseenter",function(){
// if(a7==false)
// {
// 	h.style.fontSize="25px";
// 	//h.style.color="#f1f1f1";
// }

// });
// h.addEventListener("mouseleave",function(){
// 	if(a7==false)
// 	{
// 	h.style.fontSize="20px";
// 	//h.style.color="#818181";
// 	}
// });
// i.addEventListener("mouseenter",function(){
// if(a8==false)
// {
// 	i.style.fontSize="25px";
// 	//i.style.color="#f1f1f1";
// }

// });
// i.addEventListener("mouseleave",function(){
// 	if(a8==false)
// 	{
// 	i.style.fontSize="20px";
// 	//i.style.color="#818181";
// 	}
// });
// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}
$(function() {

    var $sidebar   = $("#sidebar-container"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});

var drop=document.getElementById("drop");
drop.addEventListener("click",function(){
    drop.style.visibility="hidden";
    var cl=document.getElementById("sas");
    cl.classList.remove("first_time");
    var lir=document.getElementById("lir");
    lir.style.visibility="visible";
    var drop2=document.getElementById("drop2");
    drop2.style.visibility="visible";

})
var drop2=document.getElementById("drop2");
drop2.addEventListener("click",function(){
    drop.style.visibility="visible";
    drop2.style.visibility="hidden";
    var cl=document.getElementById("sas");
    cl.classList.add("first_time");
    var lir=document.getElementById("lir");
    lir.style.visibility="hidden";
})