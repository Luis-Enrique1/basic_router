function select_tab(id) {
    document.querySelectorAll(".route").forEach(item => item.classList.remove('selected'));
    document.getElementById(id).classList += ' selected'
}