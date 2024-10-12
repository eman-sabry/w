async function fetchData() {
    try {
        const response = await fetch('pageatlah.json');
        const data = await response.json();
        const woman = data.filter(data => data.type === 'woman'&& data.store==="zozo atlah");
        displayData(woman); 
        setupSearch(woman); 
        console.log(woman)
    } catch (error) {
        console.error('Error fetching ', error);
    }
  }

  
  function displayData(woman) {
    var atlah = '';
  
    for (let i = 0; i < woman.length; i++) {
        atlah += `
        
             <div class="col">
            <div class="card">
             <img id="atlahf" src="${woman[i].img}" class="card-img-top" alt="..." />
              <div class="card-body">
              <div>
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

              </div>
                <h3 class="card-title">${woman[i].name}</h3>
                <h3  class="card-text">
                 color:${woman[i].color}
                </h3>
                <h3 class="card-text">
                Size: ${woman[i].size}
                </h3>
                <h3 class="card-text">
                price: ${woman[i].price1}
                </h3>
       
              </div>
            </div>
          </div>`;
    }
  
    document.getElementById("row").innerHTML =atlah;

  }
  
  function setupSearch(woman) {
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase(); // الحصول على النص الذي كتبه المستخدم
        const filteredData = woman.filter(woman => woman.name.toLowerCase().includes(searchTerm)); // فلترة البيانات
        displayData(filteredData); // إعادة عرض البيانات بناءً على الفلترة
    });
  }

  
  
  fetchData();