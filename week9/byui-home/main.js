const searchForm = document.getElementById('searchForm');
let showed = false
function toggleSearch(e){
    e.preventDefault();
    searchForm.style.display = !showed?'block':'none';
    showed = !showed;
}