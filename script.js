console.log("Hello world")
// alert("Hello world")


var dataUser = [
    { fname : "A" , lname:"ALastname", code : "1", fcode : "TH1"},
    { fname : "B" , lname:"BLastname", code : "2", fcode : "TH2"},
    { fname : "C" , lname:"CLastname", code : "3", fcode : "TH3"},
    { fname : "D" , lname:"DLastname", code : "4", fcode : "TH4"},
]


function setData (event){
    let value = event.value
    let user = dataUser.filter(el=> el.code == value)[0]
    document.querySelector('input[name="car"]').value = user.fcode
    document.querySelector('input[name="fname"]').value = user.fname 
    document.querySelector('input[name="lname"]').value = user.lname
    console.log(value)
}