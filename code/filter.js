"use strict";
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.product_item').show('1000');
        }
        else{
            $('.product_item').not('.'+ value).hide('1000');
            $('.product_item').filter('.'+ value).show('1000');
        }
    });
    $('.list').click(function(){
        $(this).addClass('active_products_photo').siblings().removeClass('active_products_photo');
    })
});