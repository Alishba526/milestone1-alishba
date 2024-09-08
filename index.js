// scripts.ts
function toggleSection(id) {
    var element = document.getElementById(id);
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    }
}
