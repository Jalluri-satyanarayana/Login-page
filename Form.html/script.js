function validate(){
    if(document.myForm.EMail.value == ""){
        alert("Please provide your Email ID")
        document.myForm.EMail.focus()
        return false
    }else if(document.myForm.Password.value == ""){
        alert("Please provide your Password")
        document.myForm.Password.focus()
        return false
    }
    else{
        return true
    }
}