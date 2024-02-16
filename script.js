
let guitars = [{SerialNumber: 100,Price: 500, Builder: "Fender",  Model:"nModel", Type:"Acoustic" , BackWood:" Mahogany" , TopWood:"Oak"  }, {SerialNumber: 200,Price: 450, Builder: "Yamaha",  Model:"CSG102QA", Type:"Acoustic" , BackWood:" Mahogany" , TopWood:"Oak"  }, {SerialNumber: 300,Price: 500, Builder: "Taylor",  Model:"bbBuilder", Type:"Electric" , BackWood:"N/A" , TopWood:"Oak"  }, {SerialNumber: 400,Price: 1000, Builder: "Fender",  Model:"SSAS", Type:"Acoustic" , BackWood:" Oak" , TopWood:"Oak"  }, {SerialNumber: 500,Price: 200, Builder: "nBuilder",  Model:"Fender", Type:"Acoustic" , BackWood:" Sap" , TopWood:"Bamboo"  }]


function addGuitar(){
    
    let SerialNumber = document.getElementById("serialNumber").value;
    let Price = document.getElementById("price").value;
    let Builder = document.getElementById("builder").value;
    let Model = document.getElementById("model").value;
    let Type = document.getElementById("type").value;
    let BackWood = document.getElementById("backwood").value;
    let TopWood = document.getElementById("topwood").value;
    guitars.push({SerialNumber,Price,Builder,Model,Type,BackWood,TopWood});
    alert(JSON.stringify(guitars));
    
}


function searchGuitar(){
  
}


