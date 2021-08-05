var XLSX = require("xlsx")
var fs = require("fs")

var workbook = XLSX.readFile("cypress/fixtures/MCX152V with CC550.xlsx")

var worksheet = workbook.Sheets['PT1000']

var user_data = XLSX.utils.sheet_to_json(worksheet)

console.log(user_data)

fs.writeFile("cypress/fixtures/user_data.json", JSON.stringify(user_data), (err)=>{
    if(err){
        console.log(err)
        return
    }
})