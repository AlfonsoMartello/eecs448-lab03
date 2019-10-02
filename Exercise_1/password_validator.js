function validateFunc(password1, password2) {
    if (password1.value.length < 8) {
        alert("The password must be at least 8 characters long.")
    }
    else if (password1.value != password2.value) {
        alert("The passwords don't match!")
    }
    else
    {
        alert("The passwords are valid.")
    }
}
