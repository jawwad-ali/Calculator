function getNum(num){
    var number = document.getElementById("result")

    // getting the value of inout field and concatinating it
    number.value += num
}
function clearField(){
    var clean = document.getElementById("result")
    result.value = ""
}
function calculate(){
    var result = document.getElementById("result")
    console.log(result.value)
    result.value = eval(result.value)
}