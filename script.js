let form = document.getElementById("frm")
let uname = document.getElementById("name");
let number = document.getElementById("number");
let relations = document.getElementById("relations")
let infoForm = document.getElementById("info-form")

function generateField(e) {
    e.preventDefault();
    var infoObj = [uname.value, number.value, relations.value]
    let a=document.createElement("a")
    let button=document.createElement("button")
    let div=document.createElement("div")
    let span=document.createElement("span")
    div.className="user-info m-1"
    span.className="action  float-end"
    infoForm.appendChild(div)
    infoForm.className="overflow-auto"
    div.appendChild(span)
    for (let x in infoObj) {
        let p = document.createElement("p")
        p.innerText = infoObj[x]
        div.appendChild(p);
        button.innerText="Delete"
        button.className="btn btn-danger btn-lg mt-2 mr-3 float-end"
        a.className=" fa fa-phone fa-4x"
        a.setAttribute("href" , `tel:${infoObj[1]}`)
        span.appendChild(a);
        span.appendChild(button);
        form.reset();
    }
}

function deleteDetails(e)
{
    e.preventDefault()
    let div =document.getElementsByClassName("user-info")
    if(e.target.className.includes("btn btn-danger"))
    {
        let span = e.target.parentElement
        let div = span.parentElement
        let userInfo= div.parentElement
        userInfo.removeChild(div)
    }
}
form.addEventListener("submit", generateField)
infoForm.addEventListener("click",deleteDetails)