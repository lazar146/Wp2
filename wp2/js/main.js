const  BASEURL = "data/";
function ajaxCallBack(nazivFajla, rezultat){
    $.ajax({
        url: BASEURL + nazivFajla,
        method: "get",
        dataType: "json",
        success: rezultat,
        error: function(jqXHR, exception){
            var msg = '';
            if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
            msg = 'Time out error.';
            } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
            } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    })
}



function Ubaci(name, value){
    localStorage.setItem(name, JSON.stringify(value));
}
function Izbaci(name){
    

    return JSON.parse(localStorage.getItem(name));
}
if(Izbaci("kanta")==null){
    Ubaci("kanta",[]);
}



window.onload = function(){

     ajaxCallBack("menu.json",function(linkovi){
        dinMeni(linkovi);
     });

     $("#news").on("click",function(){

    
        var provEmaill = document.querySelector("#prov");
            console.log(provEmaill);
        let greska;
    
        let regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;
        if(!regEmail.test(provEmaill.value)){
            provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
            provEmaill.nextElementSibling.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
            provEmaill.classList.add("greska");
            greska++;
          }
          else{
            provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
            provEmaill.nextElementSibling.nextElementSibling.innerHTML = "Sent!";
            provEmaill.classList.remove("greska");
            document.querySelector("#newsF").reset();
            document.querySelector("#d").classList.add("dobar");
          }
    
    
          if(greska == 0){
            
    
          }
    })
    
     console.log(document.location.pathname)

     var proizvodi = document.querySelectorAll('.dodaj');

     proizvodi.forEach(proizvod => {
         proizvod.addEventListener('click',function(i){
           i.preventDefault();
           let brojProizvoda = 0;
           let brojProizvodauKanti=0;
           if(1){
            
            let kanta = Izbaci("kanta");
            console.log(kanta);
            
           
            for(let k of kanta){
                
                if(k.id == this.getAttribute("data-id")){
                    brojProizvoda++;
                }
                }
                if(brojProizvoda>0){
                    alert("ima vec")
                }
                else{
                    brojProizvodauKanti+=1;
                    console.log(brojProizvodauKanti);
                    kanta.push({"id": this.getAttribute("data-id"),"quantity":1});
                    Ubaci("kanta",kanta);
                    Ubaci("brojProizvoda",brojProizvodauKanti);
                }
            
           }
         });
       });


function dinMeni(linkovi){
    var ispis="";

            for(let obj of linkovi){
                ispis+=`<li><a href="${obj.link}">${obj.name}</a></li>`
            }

            document.getElementById("dinIspis").innerHTML = ispis;
}


}

if(window.location.pathname == "/contact.html"){
//forma

var Greska = 0;

    let klik = document.querySelector("#dugme");
    klik.addEventListener("click", forma);

    function forma(){

        console.log("sssssssssss")


      var provIme,provPrezime,provEmail,provDdl,provRad,provCh,provText;

    provIme = document.querySelector("#ime");
    provPrezime = document.querySelector("#prezime");
    provEmail = document.querySelector("#mejl");
    
    provRad = document.getElementsByName("Rb1");
    provCh = document.getElementsByName("chd");
    provText = document.querySelector("#pisi"); 

     let regZaIme = /^[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15})?$/;
      let regPrezime = /^[A-ZŠĐŽĆČ][a-zšđžćč]{1,20}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{1,20})?$/;
      let regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;

      if(!regZaIme.test(provIme.value)){
        provIme.nextElementSibling.classList.remove("sakrij");
        provIme.nextElementSibling.innerHTML = "The name is wrong. Example: Michael";
        provIme.classList.add("greska");
        Greska5=true;
      }
      else{
        provIme.nextElementSibling.classList.add("sakrij");
        provIme.nextElementSibling.innerHTML = "";
        provIme.classList.remove("greska");
        Greska5=false;
      }

      if(!regZaIme.test(provPrezime.value)){
        provPrezime.nextElementSibling.classList.remove("sakrij");
        provPrezime.nextElementSibling.innerHTML = "The last name is wrong. Example: Dee Santa";
        provPrezime.classList.add("greska");
        Greska6=true;
      }
      else{
        provPrezime.nextElementSibling.classList.add("sakrij");
        provPrezime.nextElementSibling.innerHTML = "";
        provPrezime.classList.remove("greska");
        Greska6=false;
      }


      if(!regEmail.test(provEmail.value)){
        provEmail.nextElementSibling.classList.remove("sakrij");
        provEmail.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
        provEmail.classList.add("greska");
        Greska7=true;;
      }
      else{
        provEmail.nextElementSibling.classList.add("sakrij");
        provEmail.nextElementSibling.innerHTML = "";
        provEmail.classList.remove("greska");
        Greska7=false;
      }

      

      let usluga = "";
      for(let i = 0; i < provRad.length; i++){
          if(provRad[i].checked){
              usluga = provRad[i].value;
              break;
          }
      }
      

      let ch = "";
      for(let i = 0; i < provCh.length; i++){
          if(provCh[i].checked){
              ch += provCh[i].value + " ";
          }
      }
      var Greska1,Greska2,Greska3,Greska4,Greska5,Greska6,Greska7
      

      if(usluga == ""){
        provRad[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
        provRad[0].parentElement.parentElement.nextElementSibling.innerHTML = "You need to check one";
        provRad[0].parentElement.parentElement.classList.add("greska");
        Greska2=true;
      }
      else{
        provRad[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
        provRad[0].parentElement.parentElement.nextElementSibling.classList.innerHTML = "";
        provRad[0].parentElement.parentElement.classList.remove("greska");
        Greska2=false;
      }

      if(ch == ""){
        provCh[0].parentElement.parentElement.nextElementSibling.classList.remove("sakrij");
        provCh[0].parentElement.parentElement.nextElementSibling.innerHTML = "You need to check one";
        provCh[0].parentElement.parentElement.classList.add("greska");
        Greska3=true;
      }
      else{
        provCh[0].parentElement.parentElement.nextElementSibling.classList.add("sakrij");
        provCh[0].parentElement.parentElement.nextElementSibling.classList.innerHTML = "";
        provCh[0].parentElement.parentElement.classList.remove("greska");
        Greska3=false;
      }
       if(provText.value.length <25){
        provText.nextElementSibling.classList.remove("sakrij");
        provText.nextElementSibling.innerHTML = "You need atleast 25 characters to enter";
        provText.classList.add("greska");
        Greska4=true;
      }
      else{
        provText.nextElementSibling.classList.add("sakrij");
        provText.nextElementSibling.innerHTML = "";
        provText.classList.remove("greska");
        Greska4=false;
      }
       console.log(Greska)
      if(Greska1 == false && Greska2 == false && Greska3 == false && Greska4 == false && Greska5 == false && Greska6 == false && Greska7 == false){
       
        document.querySelector("#dugme").nextElementSibling.classList.remove("sakrij");
        document.querySelector("#dugme").nextElementSibling.innerHTML = "All good!";
        document.querySelector("#dugme").classList.add("greska");
        document.querySelector("#prijava").reset()      
      }
      else{
        
        document.querySelector("#dugme").nextElementSibling.classList.add("sakrij");
        document.querySelector("#dugme").nextElementSibling.innerHTML = "";
      }

}
document.querySelector("#pisi").addEventListener("keyup",function(){

  var vrednostp=document.querySelector("#pisi");
  var brojkaraktera=vrednostp.value;
  var sadduzinaje = brojkaraktera.length;

  console.log(brojkaraktera);


  if(sadduzinaje<=200){
      
      var smanji=200-sadduzinaje;
      document.querySelector("#brojkar").innerHTML = "Left characters to go:"+" "+smanji;
  }
  else{
      vrednostp.value= brojkaraktera.substring(0,200);
      
  }
});

$("#news").on("click",function(){

    
    var provEmaill = document.querySelector("#prov");
        console.log(provEmaill);
    let greska;

    let regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;
    if(!regEmail.test(provEmaill.value)){
        provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
        provEmaill.nextElementSibling.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
        provEmaill.classList.add("greska");
        greska++;
      }
      else{
        provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
        provEmaill.nextElementSibling.nextElementSibling.innerHTML = "Sent!";
        provEmaill.classList.remove("greska");
        document.querySelector("#newsF").reset();
        document.querySelector("#d").classList.add("dobar");
      }


      if(greska == 0){
        

      }
})
}
if(window.location.pathname == "/shop.html"){

   
$(document).on("change", ".gender", promena);
     $(document).on("change", ".brands", promena);
     $(document).on("change", ".price", promena);
     $(document).on("change", "#sortiraj", promena);

ajaxCallBack("gender.json",function(linkovi){
        dinGen(linkovi);
        localStorage.setItem("svi_polovi",JSON.stringify(linkovi))
     });
     ajaxCallBack("brands.json",function(linkovi){
        dinBrands(linkovi);
        localStorage.setItem("svi_brendovi",JSON.stringify(linkovi))
     });
     ajaxCallBack("price.json",function(linkovi){
        dinPrice(linkovi);
     });
     ajaxCallBack("products.json",function(linkovi){
        dinProducts(linkovi);
        localStorage.setItem("svi_proizvodi",JSON.stringify(linkovi))
     });







}
if(window.location.pathname == "/brands.html"){
  

     ajaxCallBack("brands.json",function(rezultat){
        ispisBrenda(rezultat);
    })

    function ispisBrenda(rezultat){

        var ispis="";

        for(let i of rezultat){
        

        ispis+=
        `
        <div class="brand_box">
			<div class="left-side col-xs-12 col-sm-3">
				<img src="${i.slika}" alt="${i.naslov}"/>
			</div>
			<div class="middle-side col-xs-12 col-sm-5">
				<h4><a href="#">${i.naslov}</a></h4>
				<p>${i.tekst}</p>
			</div>
			<div class="right-side col-xs-12 col-sm-4">
			   <p><a href="shop.html">Go to shop</a></p>
			  <a href="shop.html" class="btn btn1 btn-primary btn-normal btn-inline " target="_self">View Products</a>     
		   </div>
			<div class="clearfix"> </div>
		 </div>
        `
        }

        document.querySelector("#brandss").innerHTML = ispis;
    }






     $("#news").on("click",function(){

    
        var provEmaill = document.querySelector("#prov");
            console.log(provEmaill);
        let greska;
    
        let regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;
        if(!regEmail.test(provEmaill.value)){
            provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
            provEmaill.nextElementSibling.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
            provEmaill.classList.add("greska");
            greska++;
          }
          else{
            provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
            provEmaill.nextElementSibling.nextElementSibling.innerHTML = "Sent!";
            provEmaill.classList.remove("greska");
            document.querySelector("#newsF").reset();
            document.querySelector("#d").classList.add("dobar");
          }
    
    
          if(greska == 0){
            
    
          }
    })
}
if(window.location.pathname == "/index.html"){ 
    

    $("#news").on("click",function(){

    
    var provEmaill = document.querySelector("#prov");
        console.log(provEmaill);
    let greska;

    let regEmail = /^[a-z](([a-z])?([0-9])?){1,13}@(gmail|hotmail)\.com$/;
    if(!regEmail.test(provEmaill.value)){
        provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
        provEmaill.nextElementSibling.nextElementSibling.innerHTML = "The email is wrong. Example: example@gmail.com";
        provEmaill.classList.add("greska");
        greska++;
      }
      else{
        provEmaill.nextElementSibling.nextElementSibling.classList.remove("sakrij");
        provEmaill.nextElementSibling.nextElementSibling.innerHTML = "Sent!";
        provEmaill.classList.remove("greska");
        document.querySelector("#newsF").reset();
        document.querySelector("#d").classList.add("dobar");
      }


    
})}
if(window.location.pathname == "/checkout.html"){
    prikazi();
}
function prikazi(){
    let produkti = Izbaci("kanta");
        
    console.log(produkti);
        if(produkti.length == 0){
            PraznaKanta();
            
        }
        else{
            pisi();
        }
}
function PraznaKanta(){
    $("#prazna").html(`<p id="emptyP">Your cart is empty, go and shop!</p><br><a href="shop.html"><input type="button" class="emptyB" value="Shop"></a>`);
    $("#prikazuj").html("");
    document.querySelector("#total").innerHTML = "";
    Ubaci("kanta", []);
    document.querySelector("#reset").classList.add("sakrij");
    document.querySelector("#cekciraj").classList.add("sakrij");
}

function pisi(){
    
    let svi = Izbaci("svi_proizvodi");
    let uKanti = Izbaci("kanta");


    let ispis = `<table class="tabela">
    <thead>
        <tr id="trGore">
            <th id="tdBoja">Picture</th>
            <th id="tdBoja">Product Name</th>
            <th id="tdBoja">Quantity</th>
            <th id="price">Price</th>
            <th id="tdBoja">Remove</th>
        </tr>
    </thead>
    <tbody>`;
let total=0;
let brojProiz=0;
    for(let p of svi){
        for(let k of uKanti){
            if(p.id == k.id){
        
        total+=p.price.nova*k.quantity;
        ispis += 
        `<tr class="rem1">
        <td class="invert-image tdDoleSlika">        
                <img src="${p.img}" style='height:130px' alt="${p.name}" class="img-responsive tdDoleSlikaC">
        </td>
        <td class="invert tdDole">${p.name}</td>
        
        <td class="invert tdDoleQ"><input type="button" class="korpaButtonDO" data-id="${p.id}" id="oduzmi" value="-"> <p id="qan">  ${k.quantity} </p>   <input type="button" class="korpaButtonDO"  data-id="${p.id}" id="dodaj" value="+"></td>
        <td class="invert tdDoleP">${p.price.nova*k.quantity}$</td>
        <td class="invert tdDole">
            <div class="rem">
                <input type="button" class='btn-remove korpaButton' value="Remove" data-id='${p.id}'>
            </div>
        </td>
    </tr>`;
    
            }
        }
    }
   
    document.querySelector("#total").innerHTML = "<span id='totalp'>Total price is:</span>"+" "+total+"$";

    ispis +=`    </tbody>
    </table>`;

    $("#prikazuj").html(ispis);
    $(".btn-remove").click(removeFromCart);
    ;
}

$(document).on("click","#dodaj",dodaj);
$(document).on("click","#oduzmi",oduzmi);
$(document).on("click","#cekciraj",PraznaKanta);
$(document).on("click","#reset",PraznaKanta);
function dodaj(){
    var izKante = Izbaci("kanta");
    var quantity = this.parentElement.children[1].innerHTML;
    quantity=parseInt(quantity);
    quantity++;
    this.parentElement.children[1].innerHTML =quantity;
    let niz=[];

    izKante.forEach(i => {
        if(i.id == this.getAttribute("data-id")){
            i.quantity=quantity;
            niz.push(i);
        }
        else{
            niz.push(i);
        }
        Ubaci("kanta",niz);
        pisi();
    })
}
function oduzmi(){
    var izKante = Izbaci("kanta");
    var quantity = this.parentElement.children[1].innerHTML;
    quantity=parseInt(quantity);
    let niz=[];
    if(quantity>1){
        quantity--;
        this.parentElement.children[1].innerHTML =quantity
        izKante.forEach(i => {
            if(i.id == this.getAttribute("data-id")){
                i.quantity=quantity;
                niz.push(i);
            }
            else{
                niz.push(i);
            }
            Ubaci("kanta",niz);
            pisi();
        })


    }
    
    
    
}
function removeFromCart(){
    let idP = $(this).data("id");

    let uKanti = Izbaci("kanta");
    let izbaceni = uKanti.filter(el => el.id != idP);

    if(izbaceni.length == 0){
        Ubaci("kanta", []);
    }
    else{
        Ubaci("kanta", izbaceni);
    }

    prikazi();
}

function brandFilter(products){
    let brandIds = [];
    let chosenBrands = document.querySelectorAll('input[name="brands"]:checked');
    

    console.log(chosenBrands)

    chosenBrands.forEach(brand => {
        brandIds.push(Number(brand.value))
    })

    if(brandIds.length){
        return products.filter(product => brandIds.includes(product.brand))
    }
    

    return products;
}

function genderFilter(products){
    let genderIds = [];
    let chosenGender = document.querySelectorAll('input[name="gender"]:checked');
    

    

    chosenGender.forEach(gender => {
        genderIds.push(Number(gender.value))
    })

    if(genderIds.length){
        return products.filter(product => genderIds.includes(product.gender))
    }
    

    return products;
}

function priceFilter(products){
    let priceIds = [];
    let chosenPrices = document.querySelectorAll('input[name="price"]:checked');
    

    console.log(chosenPrices)

    chosenPrices.forEach(prices => {
        priceIds.push(Number(prices.value))
    })

    if(priceIds.length){
        return products.filter(product => priceIds.includes(product.priceId))
    }
    

    return products;
}
function sortiranje(produkti){
    let sortPr = [];
    let izbor = document.querySelector("#sortiraj").value;
    console.log(izbor)
    if(izbor == "0"){
        sortPr = produkti;
    }
    else{
        sortPr = produkti.sort(function(a, b){
            if(izbor == "PriceASC"){
                return a.price.nova-b.price.nova;
            }
            if(izbor == "PriceDSC"){
                return b.price.nova-a.price.nova;
            }
            if(izbor == "NameASC"){
                if(a.name < b.name){
                    return -1;
                }
                else if(a.name > b.name){
                    return 1;
                }
                else{
                    return 0;
                }
            }
            if(izbor == "NameDSC"){
                if(a.name > b.name){
                    return -1;
                }
                else if(a.name < b.name){
                    return 1;
                }
                else{
                    return 0;
                }
            }   
            if(izbor == "Popularity"){
                return b.grade - a.grade
            }  
        })
    }
    return sortPr;
}
function promena(){
    let proizvodi = JSON.parse(localStorage.getItem("svi_proizvodi"));
 
    dinProducts(proizvodi);
 }

function dinGen(linkovi){
    var ispis="";

            for(let obj of linkovi){
                ispis+=`<li><input type="checkbox" value="${obj.id}" class="gender" name="gender"> ${obj.type}</li>`
            }

            document.getElementById("dinGen").innerHTML = ispis;
}
function dinBrands(linkovi){
    var ispis="";

            for(let obj of linkovi){
                ispis+=`<li><input type="checkbox" value="${obj.id}" class="brands" name="brands"> ${obj.naslov}</li>`
            }

            document.getElementById("dinBrands").innerHTML = ispis;
}
function dinPrice(linkovi){
    var ispis="";

            for(let obj of linkovi){
                ispis+=`<li><input type="checkbox" value="${obj.id}" class="price" name="price"> ${obj.price}</li>`
            }

            document.getElementById("dinPrice").innerHTML = ispis;
}
function dinProducts(linkovi){

var ispis="";

    linkovi = sortiranje(linkovi);
    linkovi = brandFilter(linkovi);
    linkovi = genderFilter(linkovi);
    linkovi = priceFilter(linkovi);
    

    if(linkovi.length == 0){
         ispis=`<div class="col-md-12">
         <div class="boxes text-center">
                 <h2 class="alert alert-danger">NO ITEMS</h2>
                </div>
        </div>`;
    }

            for(let obj of linkovi){
                ispis+=`
                <div class="col-md-4">
					<div class="boxes">
						<div class="inner_content clearfix">
							<div class="product_image">
								<div class="mask1"><img src="${obj.img}" alt="${obj.name}" class="img-responsive zoom-img"></div>		   
									<div class="product_container">
												<h4>${obj.name}</h4>
                                                <h6>${ispisiPol(obj.gender)}</h6>
													<p>${
                                                        ispisiBrend(obj.brand)
                                                    }</p>
													<div class="price mount item_price fll"><p id="nova">${obj.price.nova}$</p>  <del id="del">${obj.price.stara == null ? "":obj.price.stara+"$"}</del></div>
                                                    
													<input type="button" class="button btn dodaj buttonShop" value="Add to cart" data-id="${obj.id}">
                                                    
														</div>		
													 </div>
											</div> 
										</div>
									</div>
                 `
            }

            document.getElementById("dinProizvodi").innerHTML = ispis;
}

function ispisiBrend(linkovi){
var html="";
let nizBrendova = JSON.parse(localStorage.getItem("svi_brendovi"));

    for(let dva of nizBrendova){

      
      


        if(linkovi==dva.id){
            html=dva.naslov
            return html;
        }
    }
}
function ispisiPol(linkovi){
    var html="";
    let nizPolova = JSON.parse(localStorage.getItem("svi_polovi"));
    
        for(let pol of nizPolova){
    
            if(linkovi==pol.id){
                html=pol.type
                return html;
            }
        }
    
    
}


