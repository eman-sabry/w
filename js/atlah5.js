async function fetchData() {
    try {
        const response = await fetch('pageatlah.json');
        const data = await response.json();
        const man = data.filter(data => data.type === 'man'&& data.store==="momo atlah");
        displayData(man); 
        setupSearch(man); 
    } catch (error) {
        console.error('Error fetching ', error);
    }
  }
  
  function displayData(man) {
    var atlah = '';
  
    for (let i = 0; i < man.length; i++) {
        atlah += `
        
             <div class="col">
            <div class="card">
             <img id="atlahf" src="${man[i].img}" class="card-img-top" alt="..." />
              <div class="card-body">
              <div>
              <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>

              </div>
                <h3 class="card-title">${man[i].name}</h3>
                <h3  class="card-text">
                 color:${man[i].color}
                </h3>
                <h3 class="card-text">
                Size: ${man[i].size}
                </h3>
                <h3 class="card-text">
                price: ${man[i].price1}
                </h3>
                 
              </div>
            </div>
          </div>`;
    }
  
    document.getElementById("row").innerHTML =atlah;

  }
  
  function setupSearch(man) {
    document.getElementById('searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase(); // الحصول على النص الذي كتبه المستخدم
        const filteredData = man.filter(man => man.name.toLowerCase().includes(searchTerm)); // فلترة البيانات
        displayData(filteredData); // إعادة عرض البيانات بناءً على الفلترة
    });
  }

  
  
  fetchData();