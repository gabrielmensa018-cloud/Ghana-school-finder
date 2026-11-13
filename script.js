const regions = ["Ahafo","Ashanti","Bono","Bono East","Central","Eastern","Greater Accra","North East","Northern","Oti","Savannah","Upper East","Upper West","Volta","Western","Western North"];
const schools = window.schoolDirectory || [];
const searchInput=document.getElementById("schoolSearch");
const suggestions=document.getElementById("suggestions");
const grid=document.getElementById("schoolGrid");
const typeFilter=document.getElementById("typeFilter");
const regionFilter=document.getElementById("regionFilter");
const count=document.getElementById("resultCount");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const initials=name=>name.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();
regions.forEach(r=>{const o=document.createElement("option");o.value=r;o.textContent=r;regionFilter.appendChild(o);});
function matches(){
 const q=searchInput.value.trim().toLowerCase();
 return schools.map((s,index)=>({...s,index})).filter(s=>(!q||`${s.name} ${s.location} ${s.region}`.toLowerCase().includes(q))&&(typeFilter.value==="all"||s.type===typeFilter.value)&&(regionFilter.value==="all"||s.region===regionFilter.value));
}
function card(s){return `<a class="school-card" href="school.html?id=${s.index}"><span class="school-logo">${esc(initials(s.name))}</span><span class="school-info"><h3>${esc(s.name)}</h3><p>${esc(s.location)} · ${esc(s.region)}</p><span class="school-type">${esc(s.type)} · View school details →</span></span></a>`;}
function render(){
 const list=matches();
 count.textContent=`${list.length} matching ${list.length===1?"school":"schools"} in this starter catalogue`;
 grid.innerHTML=list.length?list.map(card).join(""):`<div class="empty-state">No matching schools in the current starter catalogue. Try another spelling or clear the filters.</div>`;
}
function showSuggestions(){
 const q=searchInput.value.trim().toLowerCase();
 if(!q){suggestions.classList.remove("show");suggestions.innerHTML="";return;}
 const found=schools.map((s,index)=>({...s,index})).filter(s=>`${s.name} ${s.location} ${s.region}`.toLowerCase().includes(q)).slice(0,7);
 suggestions.innerHTML=found.length?found.map(s=>`<a class="suggestion" href="school.html?id=${s.index}"><span class="mini-logo">${esc(initials(s.name))}</span><span><b>${esc(s.name)}</b><small>${esc(s.type)} · ${esc(s.region)} · Open profile →</small></span></a>`).join(""):`<div class="suggestion">No matches in the current starter catalogue.</div>`;
 suggestions.classList.add("show");
}
searchInput.addEventListener("input",()=>{showSuggestions();render();});
document.getElementById("searchButton").addEventListener("click",()=>{suggestions.classList.remove("show");render();});
typeFilter.addEventListener("change",render);regionFilter.addEventListener("change",render);
document.getElementById("resetFilters").addEventListener("click",()=>{searchInput.value="";typeFilter.value="all";regionFilter.value="all";suggestions.classList.remove("show");render();});
document.getElementById("universityJump").addEventListener("click",()=>{typeFilter.value="University";render();});
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))suggestions.classList.remove("show");});
render();
