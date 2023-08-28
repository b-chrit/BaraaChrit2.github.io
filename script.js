let menuIcon=document.querySelector('#menu-icon');
let navBar=document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Corrected selector
let navlinks = document.querySelectorAll('header nav a');
menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            });
             sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

window.alert=function(message, timeout=null){
    const alert=document.createElement("div");
    const alertButton=document.createElement("button");
    alertButton.innerText="OK";
    alert.classList.add("alert");
    alert.setAttribute("style",`
        position:fixed;
        top:100px;
        left:50%;
        padding:20px;
        border-radius:10px;
        box-shadow:0 10px 5px 0 #00000022;
        display:flex;
        flex-direction:column;
        border:1px solid #333;
        background:white;
        transform:translateX(-50%);
        // width: 50%;
        margin-top:100px;
        text-align:center;
        font-size:16px;
    `);
    alertButton.setAttribute("style",`
        border:1px solid #333;
        background:white;
        border-radius:5px;
        padding:5px;
    `);
    alert.innerHTML=`<span style="padding: 10px">${message}</span>`;
    document.body.appendChild(alert);
    alertButton.addEventListener("click", (e)=>{
        alert.remove();        
    });
    if(timeout !=null){
        setTimeout(()=>{
            alert.remove();
        }, Number(timeout))
    }
    alert.appendChild(alertButton);
}

