import"./modulepreload-polyfill.js";/* empty css   *//* empty css        */import{f as d}from"./api.js";let s=[];async function o(){const t=document.getElementById("loadingSpinner");t.style.display="block",s=await d(),i(s),t.style.display="none"}function i(t){const n=document.getElementById("studentTableBody");n.innerHTML="",t.forEach(e=>{const a=e.age>25?'<span class="badge bg-success">Active</span>':'<span class="badge bg-warning">Pending</span>';n.innerHTML+=`
            <tr>
                <td>${e.firstName} ${e.lastName}</td>
                <td>${e.email}</td>
                <td>${e.university||"N/A"}</td>
                <td>${e.age}</td>
                <td>${a}</td>
            </tr>
        `})}document.getElementById("searchInput").addEventListener("input",function(t){const n=t.target.value.toLowerCase(),e=s.filter(a=>a.firstName.toLowerCase().includes(n)||a.email.toLowerCase().includes(n));i(e)});o();
