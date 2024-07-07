//variables and datatypes
let produce = {
    name: "beans", 
    type: "legume", 
    dateProcured: "2024-07-06", 
    timeProcured: "10:00", 
    tonnage: 1000, 
    cost: 100000, 
    dealerName: "JohnDoe", 
    branch: "Maganjo", 
    contact: "+256700123456", 
    salePrice: 150000 
}
  let creditSale = {
    buyerName: "TrustedBuyer", 
    nationalID: "CM1234567890DF", 
    location: "Kampala", 
    contact: "+256700789012",
    amountDue: 150000, 
    salesAgentName: "Agent2", 
    dueDate: "2024-08-06", 
    produceName: "maize", 
    produceType: "grain", 
    tonnage: 1000, 
    dispatchDate: "2024-07-06" 
  };

  // objects and functions
  let sale = {
    produceName: "beans", 
    tonnage: 500, 
    amountPaid: 75000, 
    buyerName: "JaneDoe", 
    salesAgentName: "Agent1",
    dateSold: "2024-07-06", 
    timeSold: "12:00", 
    buyerContact: "+256700654321",
  };
  

  function updateStock(produce) {
    
    let stockItem = stockLevels.find(stock => stock.produceName === produce.name && stock.branch === produce.branch);
    if (stockItem) {
      stockItem.tonnage += produce.tonnage;
    } else {
      stockLevels.push({
        produceName: produce.name,
        type: produce.type,
        tonnage: produce.tonnage,
        branch: produce.branch
      });
    }
  }
  function checkStockLevels(branch) {

    let stockItems = stockLevels.filter(stock => stock.branch === branch);
  }
    
  

  // arrys
  let produceList = [
    "beans",
    "grain maize",
    "cowpeas",
    "g-nuts",
    "rice",
    "soybeans"
  ];
  console.log('here is my produceList',produceList)
  let users = [
    {
      username: "manager1",
      password: "hashedpassword123",
      role: "manager"
    },

    {
      username: "agent1",
      password: "hashedpassword123",
      role: "sales agent",
      branch: "Maganjo"
    }

  ];
  console.log('look at my users', users)
  let salesAgents = [
    {
      name: "Agent1",
      branch: "Maganjo"
    },
    {
      name: "Agent2",
      branch: "Maganjo"
    },
    {
      name: "Agent3",
      branch: "Matugga"
    },
    {
      name: "Agent4",
      branch: "Matugga"
    }
  ];
  let branches = ["Maganjo", "Matugga"];
     
  

  
  