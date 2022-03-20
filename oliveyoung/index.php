<?php
    include './header.html';    
    if(isset($_GET['menu'])){
    $menu = $_GET['menu'];
        if($menu =='1'){
            include './menu1.html';
        }else if($menu == '2'){
            include './menu2.html';
        }else if($menu == '3'){
            include './menu3.html';
        }
    }else{
        include './main.html';    
    }
    include './footer.html';
?>