document.querySelectorAll('.center li').forEach(function (listItem) {
    listItem.addEventListener('mouseenter', function () {
        const pElement = listItem.querySelector('p');
        pElement.style.transition = 'height 0.3s';
        pElement.style.height = pElement.scrollHeight + 'px';
    });

    listItem.addEventListener('mouseleave', function () {
        const pElement = listItem.querySelector('p');
        pElement.style.transition = 'height 0.3s';
        pElement.style.height = '0';
    });
});
