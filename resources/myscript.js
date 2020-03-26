function generateOTP() { 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 6; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
}
document.write("Dear customer, your OTP for registration is "+generateOTP()+". Use this code to validate your login.") 