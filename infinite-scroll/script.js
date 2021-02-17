let count = 0;
const content = document.querySelector("#content");
window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop +
         document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        count++;
        content.innerHTML += "<span>" +
        count +
        "</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui commodi quas asperiores nihil dolorum quo neque recusandae, ducimus velit magnam facilis aut reprehenderit rem nobis animi delectus dolore quos. <br/>";
    }
})