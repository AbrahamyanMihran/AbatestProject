const englishButton = document.getElementById("english-btn")
const arabicButton = document.getElementById("arabic-btn")

function arabicc(){
    document.getElementById("ar").style.display = "block";
    document.getElementById("sign-ar").style.display = "block";
    document.getElementById("or-ar").style.display = "block";
    document.getElementById("create-ar").style.display = "block";
    document.getElementById("select-ar").style.display = "block";
    document.getElementById("sign-en").style.display = "none";
    document.getElementById("en").style.display = "none";
    document.getElementById("or-en").style.display = "none";
    document.getElementById("create-en").style.display = "none";
    document.getElementById("select-en").style.display = "none";
}
function englishh(){
    document.getElementById("ar").style.display = "none";
    document.getElementById("sign-ar").style.display = "none";
    document.getElementById("or-ar").style.display = "none";
    document.getElementById("create-ar").style.display = "none";
    document.getElementById("select-ar").style.display = "none";
    document.getElementById("sign-en").style.display = "block";
    document.getElementById("en").style.display = "block";
    document.getElementById("or-en").style.display = "block";
    document.getElementById("create-en").style.display = "block";
    document.getElementById("select-en").style.display = "block";
}
