var api = 'http://localhost:8080/api/product/v1/getAll'
fetch(api)
    .then((res) => {
        return res.json()
        console.log(res.json)
    })
    .then(data  => {
    var htmls = data.map((post) => {
        console.log(post);
        // for (let i = 0; i < post.length; i++) {
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
        //   }
       
    })
    var html = htmls.join('');
    document.getElementById("api").innerHTML = html;
    })
