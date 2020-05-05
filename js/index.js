window.onload = event => {
    // Add history push() event when boxes are clicked
    window["home"].addEventListener("click", event => push(event))
    window["about"].addEventListener("click", event => push(event))
    window["gallery"].addEventListener("click", event => push(event))
    window["contact"].addEventListener("click", event => push(event))
    window["help"].addEventListener("click", event => push(event))
}
// Listen for PopStateEvent (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    // Grab the history state id
    let stateId = event.state.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    // Visually select the clicked button/tab/box
    select_tab(stateId);
    // Load content for this tab/page
    loadContent(id);
});