// gallery component
document.addEventListener('DOMContentLoaded', function(){
    
    var rotate = function(component, step){
        var slide = component.querySelector('.slide');
        var galleryWidth = component.offsetWidth;
        var slideWidth = slide.scrollWidth;

        // current left position in px
        var left = parseInt(slide.style.left || "0", 10);

        // move by one gallery width per click
        left += step * galleryWidth;

        // clamp movement
        if (left > 0) left = 0;
        if (left < galleryWidth - slideWidth) left = galleryWidth - slideWidth;

        slide.style.left = left + "px";
    };

    var components = document.querySelectorAll('.gallery');
    components.forEach(function(component){
        component.querySelector('.left').addEventListener('click', function(){
            rotate(component, 1);
        });
        component.querySelector('.right').addEventListener('click', function(){
            rotate(component, -1);
        });
    });

});
