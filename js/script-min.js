var link=document.querySelector(".button-hotel-search"),popup=document.querySelector(".modal-search"),datein=document.querySelector("[name=date-in]"),dateout=document.querySelector("[name=date-out]"),adults=document.querySelector("[name=person-value-adults]"),kids=document.querySelector("[name=person-value-kids]"),form=popup.querySelector("form");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.toggle("modal-search-show")}),form.addEventListener("submit",function(a){datein.value&&dateout.value&&adults.value&&kids.value||(a.preventDefault(),popup.classList.remove("modal-search-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-search-error"))});