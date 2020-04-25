document.getElementById("myForm").onsubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    let url = "http://localhost:2000";
    let data = new URLSearchParams();
    for (const pair of new FormData(e.target)) {
        data.append(pair[0], pair[1]);
    }
    console.log(data)

    fetch(url, {
        method: "post",
        body: data,
    }).then(res => res.json())
        .then(res2 => {
            console.log(res2)
            location.reload();

        });

}

//delete item

// let colItem=document.querySelectorAll('.colItem');

// for (const iterator of colItem) {
//     iterator.addEventListener('click',(element)=>{
//         fetch("http://localhost:2000/"+element.innerText,{
//             method:"delete"
//         }).then(res=>res.json())
//         .then(res2=>{
//             console.log(res2);
//             location.reload();
//         })

//     })

// }

function deleteElem(item) {
    fetch("http://localhost:2000/remove/" + item.innerText, {
        method: "delete"
    }).then(res => res.json())
        .then(res2 => {
            console.log(res2);
            location.reload();
        });
}