// Function to generate and display OTP
function requestOtp() {
    // Generate a 5-digit OTP
    const generatedOtp = Math.floor(10000 + Math.random() * 90000);
    sessionStorage.setItem("otp", generatedOtp);

    // Display OTP section and show the OTP for testing
    document.getElementById("otpSection").style.display = "block";
    alert(`Your OTP is: ${generatedOtp}`); // Remove this in production

    console.log("OTP generated and stored:", generatedOtp); // For debugging
}

// Function to verify OTP
function verifyOtp() {
    const enteredOtp = document.getElementById("otp").value;
    const storedOtp = sessionStorage.getItem("otp");

    // Check if the entered OTP matches the generated OTP
    if (enteredOtp === storedOtp) {
        alert("OTP Verified Successfully!");
        sessionStorage.removeItem("otp");

        // Redirect to user-login.html upon successful OTP verification
        window.location.href = "https://forms.gle/ur8CxkuWMdiiS3EYA";
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
