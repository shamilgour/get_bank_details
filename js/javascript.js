let btn=document.querySelector("#search");
let msg=document.querySelector("#msg");
let bank=document.querySelector("#bank");
let branch=document.querySelector("#branch");
let address=document.querySelector("#address");
let city=document.querySelector("#city");
let district=document.querySelector("#district");
let contact=document.querySelector("#contact");
let bankcode=document.querySelector("#bankcode");

btn.addEventListener("click",function(e){
    e.preventDefault();
    let ifsc_code=document.querySelector("#ifsc_code").value;
    if( ifsc_code==""){
           document.querySelector("#ifsc_code").focus();;
           msg.innerHTML='<i class="fa fa-warning"></i> Please Enter IFSC Code';
    }else{
        document.querySelector("#search").style.display = "none";
        document.querySelector(".buttonload").style.display = "inline-block";
        fetch('https://ifsc.razorpay.com/'+ifsc_code)
        .then(responce=>responce.json()) 
         .then(data =>{
            document.querySelector("#search").style.display = "inline-block";
            document.querySelector(".buttonload").style.display = "none";
            if(data=="Not Found"){
            msg.innerHTML='<i class="fa fa-warning"></i> Enter Correct IFSC Code';
            bank.innerHTML="";
            branch.innerHTML="";
            address.innerHTML="";
            city.innerHTML="";
            district.innerHTML="";
            contact.innerHTML="";
            bankcode.innerHTML="";
         }else{
                      {
                       msg.innerHTML="";
                       bank.innerHTML=data['BANK'];
                       branch.innerHTML=data['BRANCH'];
                       address.innerHTML=data['ADDRESS'];
                       city.innerHTML=data['CITY'];
                       district.innerHTML=data['DISTRICT'];
                       contact.innerHTML=data['CONTACT'];
                       bankcode.innerHTML=data['BANKCODE'];
    }
    }})
         
         .catch((error)=>document.write("cant fetch data"));
    }
});
