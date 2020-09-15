"use strict";
$(document).ready(function(){
    $('.team_person').click(function(){
        $(this).addClass('name_person_active').siblings().removeClass('name_person_active');
    })
});