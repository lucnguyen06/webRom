// ===============================
// HyperUR Serial JS (Fixed)
// ===============================

// Update footer year
const yearEl=document.getElementById("year");

if(yearEl){
yearEl.textContent=
new Date().getFullYear();
}

// Theme toggle
const body=document.body;
const themeBtn=
document.getElementById(
"btn-theme-toggle"
);

const THEME_KEY=
"hyperur-theme";

function applyTheme(theme){

if(theme==="dark"){
body.classList.add(
"dark-mode"
);
}else{
body.classList.remove(
"dark-mode"
);
}

if(themeBtn){

themeBtn.querySelector(
".theme-icon"
).textContent=
theme==="dark"
?"☀️"
:"🌙";

}

}

const savedTheme=
localStorage.getItem(
THEME_KEY
);

if(savedTheme){

applyTheme(
savedTheme
);

}

if(themeBtn){

themeBtn.addEventListener(
"click",
()=>{

const nextTheme=
body.classList.contains(
"dark-mode"
)
?"light"
:"dark";

applyTheme(
nextTheme
);

localStorage.setItem(
THEME_KEY,
nextTheme
);

});

}


// ======================
// Device autocomplete
// ======================

const codenameInput=
document.getElementById(
"codename"
);

const dropdown=
document.getElementById(
"codename-dropdown"
);

const deviceDisplay=
document.getElementById(
"device-name-display"
);

function searchDevices(
query
){

if(
typeof devices==="undefined"
)
return [];

return devices.filter(
d=>

d.codeName
.toLowerCase()
.includes(
query.toLowerCase()
)

||

d.name
.toLowerCase()
.includes(
query.toLowerCase()
)

);

}

function renderDevices(
list
){

if(
!dropdown
)return;

if(
list.length===0
){

dropdown.innerHTML=
`
<div class="autocomplete-no-results">
Không tìm thấy thiết bị
</div>
`;

dropdown.classList.remove(
"hidden"
);

return;

}

dropdown.innerHTML=
list.slice(
0,
10
)
.map(
d=>`

<div
class="autocomplete-item"
data-code="${d.codeName}"
data-name="${d.name}"
>

<strong>
${d.codeName}
</strong>

-
${d.name}

</div>

`
)
.join("");

dropdown.classList.remove(
"hidden"
);

}

if(codenameInput){

codenameInput.addEventListener(
"input",
e=>{

const query=
e.target.value.trim();

if(!query){

dropdown.classList.add(
"hidden"
);

return;

}

renderDevices(
searchDevices(
query
)
);

}
);

}

dropdown?.addEventListener(
"click",
e=>{

const item=
e.target.closest(
".autocomplete-item"
);

if(!item)
return;

codenameInput.value=
item.dataset.code;

deviceDisplay.textContent=
"📱 "+
item.dataset.name;

deviceDisplay.style.display=
"block";

dropdown.classList.add(
"hidden"
);

}
);


// ======================
// Payment fields toggle
// ======================

const regType=document.getElementById(
"reg-type"
);

const paymentWrapper=document.getElementById(
"payment-fields-wrapper"
);

function togglePaymentFields(){

if(
!regType
||
!paymentWrapper
)
return;

const isPaid=
regType.value===
"paid";

paymentWrapper.style.display=
isPaid
?"block"
:"none";

paymentWrapper
.querySelectorAll(
"input, select, textarea"
)
.forEach(
el=>{

el.disabled=!isPaid;

if(!isPaid){

el.value="";
el.removeAttribute(
"required"
);

}

}

);

}

if(regType){

regType.addEventListener(
"change",
togglePaymentFields
);

togglePaymentFields();

}

// ======================
// Form submit
// ======================

const form=
document.getElementById(
"serial-form"
);

if(form){

form.addEventListener(
"submit",
e=>{

e.preventDefault();

alert(
"Đăng ký thành công!"
);

form.reset();
togglePaymentFields();

if(deviceDisplay){

deviceDisplay.style.display=
"none";

}

}
);

}