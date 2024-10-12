async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    const woman = data.filter(data => data.type === 'woman');

    // عرض البيانات المفلترة (فقط العناصر التي تكون type === 'woman')
    displayData(woman);
     
    // إعداد البحث للعمل على البيانات المفلترة
    setupSearch(woman);

    console.log(woman); // يمكنك عرض العناصر المفلترة في وحدة التحكم
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
            <h5 class="card-title">${woman[i].name}</h5>
            <h5 class="card-text">
              <img id="loca" src="/img/icon/location.png"/> ${woman[i].location}
            </h5>
            <div id="contact"> 
            <a id="clink"  href="tel:${woman[i].phone}" ><img id="aicon" src="/img/icon/phone-call_455705.png"/>Phone</a>
           
            <a id="clink" href="${woman[i].inst}" ><img id="aicon"  src="/img/icon/instagram_3991634.png"/>Instgram</a>
           

            </div>
           
            <a href="${woman[i].link}"class="btn" id="more">see more ...</a>
          </div>
        </div>
      </div>`;
  }

  document.getElementById("row").innerHTML = atlah;
}

function setupSearch(woman) {
  document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); // الحصول على النص الذي كتبه المستخدم
    const filteredData = woman.filter(data => data.name.toLowerCase().includes(searchTerm)); // فلترة البيانات
    displayData(filteredData); // إعادة عرض البيانات بناءً على الفلترة
  });
}

fetchData();
