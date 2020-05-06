window.onload = event => {
    // Add history push() event when boxes are clicked
    window["home"].addEventListener("click", event => push(event))
    window["about"].addEventListener("click", event => push(event))
    window["gallery"].addEventListener("click", event => push(event))
    window["contact"].addEventListener("click", event => push(event))
    window["help"].addEventListener("click", event => push(event))

    select_tab("home")
    load_content("home")
    push({target: {id: "home"}})
}
