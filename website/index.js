headings = document.getElementById("heading")
console.log(headings)
    var api = 'http://localhost:8080/api/product/v1/getAll'
fetch(api)
    .then((res) => {
        console.log(123,res.json)
        return res.json()
        
    })
    .then(data  => {
        console.log(data)
    var htmls = data.map((post) => {
        console.log(post,123);
        if (post.address.includes(headings.value)){
             return `
             <div class="col-12">
             <div class="section-heading heading-center">
                 <h1>${post.address}</h1>
             </div>
             <div class="content">
                 <div class="img-style">
                     <img src="${post.image}" alt="">
                 </div>
                 <p>${post.info}</p>
     
             </div>
            </div>
        `
        }
        // for (let i = 0; i < post.length; i++) {
            
        //   }
       
    })
    var html = htmls.join('');
    document.getElementById("api").innerHTML = html;
    })
