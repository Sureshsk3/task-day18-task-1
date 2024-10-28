async function fetchData() {
  try {
    let res = await fetch("https://dummyjson.com/recipes/search?limit=10");

    const card = document.querySelector(".items");
    let data = await res.json();

    data.recipes.map(
      (e) =>        
        (card.innerHTML += `
     <div class="card m-3 " style="width: 18rem">
        <img src=${e.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${e.name}</h5>
          <h5>Rating : ${e.rating}%</h5>
          <h5>Cuisine : ${e.cuisine}</h5>
          <a href="#" class="btn  btn-primary ">Order</a>
        </div>
    </div>`)
    );
  } catch (error) {}
}
fetchData();
