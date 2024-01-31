let a = document.getElementById("ip1");
let b = document.getElementById("ip2");
let c = document.getElementById("ip3");
let d = document.getElementById("ip4");
function addFile(){
    let arr = [
        {
            id: 1,
            imgUrl: a.value,
            projectName: b.value,
            link: c.value,
            tags: d.value,
        },
    ];
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
    localStorage.setItem("recentProjects",arr);
}