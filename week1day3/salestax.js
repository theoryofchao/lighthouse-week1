var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function analyzeData(salesData){
  var sales = sumArray(salesData['sales']);
  var tax = sales * salesTaxRates[salesData['province']];

  return {totalSales: sales, totalTaxes: tax};
}

function sumArray(array){
  var sum = array.reduce(add, 0);

  function add(a, b) {
    return a+b;
  }

  return sum;
}

function salesTaxReport(companySalesData, taxRates) {
  var results = {};

  for (var i = 0; i < companySalesData.length; i++) {

    var report = analyzeData(companySalesData[i]);
    
    if(typeof results[companySalesData[i]['name']] == 'undefined') {
      results[companySalesData[i]['name']] = report;
    }
    else {
      results[companySalesData[i]['name']]['totalSales'] += report['totalSales'];
      results[companySalesData[i]['name']]['totalTaxes'] += report['totalTaxes'];
    }

  }

  return results;
}

var results = salesTaxReport(companySalesData, salesTaxRates);

console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

