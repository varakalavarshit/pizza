menu_list_array = ["Veg Margherita Pizza",
                   "Chicken thanduey Pizza",
                   "Veg Supream Pizza",
                   "Veg Panneer Pizza",
                   "Delux Veggi Pizza",
                   "Veg Extravaganza Pizza",
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++);{
    htmldata=htmldata+'<li>' + menu_list_array[i]+ '</li>'
}
htmldata=htmldata+"</ol>";
document.getElementById=("display_menu").inner.html=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="section class='cards'";
for(var i=0;i<menu_list_array.length;i++);{
    htmldata=htmldata+'<div class="card">'
     + '<img src="images/pizzaIMG.png"/>'
    + menu_list_array[i]+'</div>' 
}
htmldata=htmldata+ "<section>"
document.getElementById("display_addmenu").innerHTML=htmldata;
}

function add_top(){
var item=document.getElementById("add item").value;
menu_list_array.push(item);
add_item;
}