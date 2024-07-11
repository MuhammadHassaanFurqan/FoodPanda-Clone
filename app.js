// Admin SignIn And SignUp
let AdminSignupName = document.getElementById('signUpName')
let AdminSignupUserName = document.getElementById('signUpUsername')
let AdminSignupPassword = document.getElementById('signUpPassword')
let AdminSigninUserName = document.getElementById('signInUsername')
let AdminSigninPassword = document.getElementById('signInPassword')

let Adminsignup = () => {
    // Name
    let convertASUN = JSON.stringify(AdminSignupName.value)
    localStorage.setItem('AdminName', convertASUN)
    //  Username
    let convertASUUN = JSON.stringify(AdminSignupUserName.value)
    localStorage.setItem('AdminUserName', convertASUUN)
    //  Password
    let convertASUP = JSON.stringify(AdminSignupPassword.value)
    localStorage.setItem('AdminPassword', convertASUP)
    AdminSignupName.value = ''
    AdminSignupUserName.value = ''
    AdminSignupPassword.value = ''
    Swal.fire({
        title: "Admin SignUp successFul!",
        text: "You clicked the button!",
        icon: "success"
    });
}

let Adminsignin = () => {
    // Username 
    let convertASIUN = JSON.stringify(AdminSigninUserName.value)
    // Password
    let convertASIP = JSON.stringify(AdminSigninPassword.value)
    // Check
    if (convertASIUN == localStorage.getItem('AdminUserName') && convertASIP == localStorage.getItem('AdminPassword')) {
        Swal.fire({
            title: "Admin SignIn successFul!",
            text: "You clicked the button!",
            icon: "success"
        }
            .then(location.href = 'addFood.html'));
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Invalid Username or Password",
            text: "Something went wrong!",
        });
    }
}

// Admin SignIn And SignUp
let UserSignupName = document.getElementById('UsersignUpName')
let UserSignupUserName = document.getElementById('UsersignUpUsername')
let UserSignupPassword = document.getElementById('UsersignUpPassword')
let UserSigninUserName = document.getElementById('UsersignInUsername')
let UserSigninPassword = document.getElementById('UsersignInPassword')

let Usersignup = () => {
    // Name
    let convertUSUN = JSON.stringify(UserSignupName.value)
    localStorage.setItem('Name', convertUSUN)
    //  Username
    let convertUSUUN = JSON.stringify(UserSignupUserName.value)
    localStorage.setItem('UserName', convertUSUUN)
    //  Password
    let convertUSUP = JSON.stringify(UserSignupPassword.value)
    localStorage.setItem('Password', convertUSUP)
    UserSignupName.value = ''
    UserSignupUserName.value = ''
    UserSignupPassword.value = ''
    alert('User Signup Successful !')
}

let Usersignin = () => {
    // Username 
    let convertUSIUN = JSON.stringify(UserSigninUserName.value)
    // Password
    let convertUSIP = JSON.stringify(UserSigninPassword.value)
    // Check
    if (convertUSIUN == localStorage.getItem('UserName') && convertUSIP == localStorage.getItem('Password')) {
        alert('Signin Succesful' + UserSigninUserName.value)
    }
    else {
        alert('Invalid Username or Password')
    }
}

let FoodDiv = document.getElementById('foodDiv')

let arr = []

let addFood = () => {
    let foodName = document.getElementById('foodName')
    let foodImg = document.getElementById('foodImage')
    let foodID = document.getElementById('foodId')
    let foodDesc = document.getElementById('foodDescription')
    let foodPrice = document.getElementById('foodPrice')
    let obj = {
        Name : foodName.value,
        Image: foodImg.value,
        ID : foodID.value,
        Description : foodDesc.value,
        Price : foodPrice.value,
    }
    arr.push(obj)
    localStorage.setItem('products',JSON.stringify(arr))
}
 let pro = document.getElementById('pro')
 let a = localStorage.getItem('products')
 let convert = JSON.parse(a)
convert.forEach((data) => {
    pro.innerHTML += `<div>
    <img width='200' src='${data.Image}' alt='...'>
    <div>
    <h2>${data.id}</h2>
    <h2>${data.Name}</h2>
    <p>${data.Description}</p>
    <h2>${data.Price}</h2>
    </div>
    <button onclick='addToCart(this)'>Add to Cart</button>
    </div>`
});
let addToCart = (id) =>{
    document.getElementById('xyz').innerHTML+=`<div>
    ${id.parentNode.childNodes[3].textContent}</div>
    `
}



