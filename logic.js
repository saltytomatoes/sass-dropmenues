const Content = document.querySelector("#content");

function strToHtml(str) {
    let parser = new DOMParser();
    str = parser.parseFromString(str, "text/html").body.firstElementChild;

    return str;
}

const DropDown = (function () {

    const Table = [{ title: "account", listItems: ["delete", "create", "edit", "add", "logout"] },
    { title: "account", listItems: ["delete", "create", "edit", "add", "logout"] },
    { title: "account", listItems: ["delete", "create", "edit", "add", "logout"] },
    { title: "account", listItems: ["delete", "create", "edit", "add", "logout"] },
    { title: "account", listItems: ["delete", "create", "edit", "add", "logout"] },];


    const menuList = strToHtml(`<nav><ul></ul></nav>`);
    Content.appendChild(menuList);

    const menuUl = menuList.querySelector("ul");

    for (let i = 1; i <= 5; i++) {
        let dropLi = strToHtml(`<li>style${i}</li>`);
        let dropUl = strToHtml(`<ul class="drop-menu menu-${i}">
                                 <li>uno</li>
                                 <li>dos</li>
                                 <li>tres</li>
                                 <li>cuatro</li>
                                 <li>cinco</li>
                                 <li>seis</li>
                                </ul>`);

        dropLi.appendChild(dropUl);
        menuUl.appendChild(dropLi);
    }




    return menuList;
})();


/*


for(let currlist = 0; currlist < 5; currlist++) {

        const list = strToHtml(`<ul class="list"></ul>`);
        const listTitle = strToHtml(`<li class="listTitle">${Table[currlist].title}</li>`);
        list.appendChild(listTitle);

        for(let currlistItem = 0; currlistItem < 5; currlistItem++) {
            const item = strToHtml(`<li class="item">${Table[currlist].listItems[currlistItem]}</li>`);
            list.appendChild(item);

        }

        menuList.appendChild(list);
    }


*/