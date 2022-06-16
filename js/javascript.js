let btn=document.getElementById("search");
let msg=document.getElementById("msg");
let bank=document.getElementById("bank");
let branch=document.getElementById("branch");
let address=document.getElementById("address");
let city=document.getElementById("city");
let district=document.getElementById("district");
let contact=document.getElementById("contact");
let bankcode=document.getElementById("bankcode");

btn.addEventListener("click",function(e){
    e.preventDefault();
    let ifsc_code=document.getElementById("ifsc_code").value;
    if( ifsc_code==""){
           msg.innerHTML="Please Enter IFSC Code";
    }else{
        fetch('https://ifsc.razorpay.com/'+ifsc_code)
        .then(responce=>responce.json()) 
         .then(data =>{if(data=="Not Found"){
            msg.innerHTML="Enter Correct IFSC Code";
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
