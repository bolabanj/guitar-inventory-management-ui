


let host = "https://guitar-inventory-management-latest-dcrh.onrender.com"


async function addGuitar(){
    console.log("Adding guitar");
    let SerialNumber = document.getElementById("serialNumber").value;
    let Price = document.getElementById("price").value;
    let Builder = document.getElementById("builder").value;
    let Model = document.getElementById("model").value;
    let Type = document.getElementById("type").value;
    let BackWood = document.getElementById("backwood").value;
    let TopWood = document.getElementById("topwood").value;
    if (SerialNumber == "" || Price == "" || Builder == "" || Model == "" || Type == "" || BackWood == "" || TopWood == "") {
        alert("All fields are required");
        return;
    }
    let guitars = {"serialNumber": SerialNumber,
    "price": Price,
    "builder": Builder,
    "model": Model,
    "type": Type,
    "backWood": BackWood,
    "topWood" : TopWood}
    let request = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guitars)
    }
    let response = await fetch(host + "inventory/add", request);
    console.log(response.status);
    if (response.ok) {
        alert("The guitar was added to the system");
    }else{
        alert("Something went wrong. Please try again or contact the customer support team.");
    }
    
    
}


function searchGuitar(){
  
}


