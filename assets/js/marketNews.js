//market news page js code start



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
		'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
	}
};
let x;
fetch('https://seeking-alpha.p.rapidapi.com/news/v2/list?category=market-news%3A%3Aall&size=20&number=1', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    
        x = response.data;
        console.log(x);



        //    //api call
   let rowdiv;
        // console.log(x)

for (let i = 0; i < 20; i++) {
 
let  rowdiv = document.createElement("a");
 rowdiv.setAttribute("id","card");
//  rowdiv.setAttribute("href",`${coinNames[i]["coinrankingUrl"]}`);
//  rowdiv.setAttribute("style",`background-color: ${coinNames[i]["color"]};`);
                rowdiv.innerHTML = `
    <div><img class="card_load" src=${x[i]["links"]["uriImage"]}></div>
    <div class="card_load_extreme_title">${x[i]["attributes"]["title"]}</div>
    <div class="card_load_extreme_descripion">${x[i]["attributes"]["content"]}</div>
    <div class="card_load_extreme_title_published"> Published On : ${x[i]["attributes"]["publishOn"].split("T")}</div>`;
 

document.querySelector("#rowdiv").append(rowdiv);


 
}

    })
	.catch(err => console.error(err));


           




//market news page js code end