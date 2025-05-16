async function menu(){
    const menu = document.getElementById("menu");
    
    if (menu.classList.contains("hidden")) {
        menu.classList.add("flex");
        menu.classList.add("animate-show");
        menu.classList.remove("hidden");
    } else {
        menu.classList.remove("animate-show");
        menu.classList.add("animate-hide");
        await setTimeout(()=>{
            menu.classList.remove("flex");
            menu.classList.add("hidden");
        },400);
    }
}