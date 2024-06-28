// JavaScript for interactive timeline
document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            alert('You clicked on ' + this.querySelector('h3').innerText);
        });
    });
});
