async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
  
      // فلترة البيانات لعرض فقط العناصر التي يكون فيها type === 'woman'
      const man = data.filter(data => data.type === 'man');
  
      // عرض البيانات المفلترة (فقط العناصر التي تكون type === 'woman')
      displayData(man);
       
      // إعداد البحث للعمل على البيانات المفلترة
      setupSearch(man);
  
      console.log(man); // يمكنك عرض العناصر المفلترة في وحدة التحكم
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
              <h5 class="card-title">${man[i].name}</h5>
              <h5 class="card-text">
                <img id="loca" src="/img/icon/location.png"/> ${man[i].location}
              </h5>
               <div id="contact"> 
            <a id="clink"  href="tel:${man[i].phone}" ><img id="aicon" src="/img/icon/phone-call_455705.png"/>Phone</a>
           
            <a id="clink" href="${man[i].inst}" ><img id="aicon"  src="/img/icon/instagram_3991634.png"/>Instgram</a>
           

            </div>
              <a href="${man[i].link}" class="btn" id="more">see more ...</a>
            </div>
          </div>
        </div>`;
    }
  
    document.getElementById("row").innerHTML = atlah;
  }
  
  function setupSearch(man) {
    document.getElementById('searchInput').addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase(); // الحصول على النص الذي كتبه المستخدم
      const filteredData = man.filter(data => data.name.toLowerCase().includes(searchTerm)); // فلترة البيانات
      displayData(filteredData); // إعادة عرض البيانات بناءً على الفلترة
    });
  }
  
  fetchData();