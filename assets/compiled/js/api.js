async function s(){try{return(await(await fetch("https://dummyjson.com/users")).json()).users}catch(r){return console.error("API Error:",r),[]}}export{s as f};
