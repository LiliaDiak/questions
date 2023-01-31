let items = document.querySelectorAll("input");
let mass =[];
for(let item of items){
    mass.push(item)
}
for(let item=0 ; item<mass.length; item++){
    mass[item].addEventListener("click", function(){
        let i=0;
        if(mass[item].checked){
            i=1;
        }
        if(!mass[item].checked){
            i=2;
        }
    localStorage.setItem(item, i)
    })
}
for(let item=0 ; item<mass.length; item++){
    if(localStorage.getItem(item)==1){
        mass[item].checked = !mass[item].checked;
    }if(localStorage.getItem(item)==2){
        !mass[item].checked;
    }
}
