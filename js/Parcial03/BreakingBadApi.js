export function getFrase(){
    console.log("GetFrase");
    const d = document;
    let $button = d.querySelector("#Button");
    let $textField = d.querySelector("#RandomFrase");

    let appi = "https://api.breakingbadquotes.xyz/v1/quotes";
        $button.addEventListener("click",async(e)=>{
            console.log("Button Clicked");
            
            try {
                let res = await fetch(appi);
                if(!res.ok){
                    throw "Error al acceder a la API de Breaking Bad";
                }
                $textField.innerHTML = `<span class="loader"></span>`;

                let json = await res.json(),
                $template = "";
                console.log(json[0].quote);
                $template += `
                <div>
                <h3 class ="py-5">${json[0].quote}</h3>
                <cite>${json[0].author}</cite>
                </div>
                `;

                $textField.innerHTML = $template;
                
            } catch (error) {
                
                console.log(error);
            }
         
        })
     
}