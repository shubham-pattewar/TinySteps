// Function to request OTP
function requestOtp() {
    const mobile = document.getElementById('mobile').value;
    const mobileError = document.getElementById('mobile-error');

    // Validate mobile number
    if (mobile.length === 10 && !isNaN(mobile)) {
        mobileError.textContent = ''; // Clear error message if any
        alert('OTP sent to your mobile number!');
        document.getElementById('otpSection').style.display = 'block'; // Show OTP input section
    } else {
        mobileError.textContent = 'Please enter a valid 10-digit mobile number.';
    }
}

// Function to verify OTP
function verifyOtp() {
    const otp = document.getElementById('otp').value;

    // Simulated OTP check (replace with actual OTP logic if needed)
    const validOtp = '123456'; // Example OTP for testing purposes

    if (otp === validOtp) {
        alert('OTP Verified Successfully!');
        // Redirect to the given URL
        window.location.href = 'https://forms.gle/ur8CxkuWMdiiS3EYA';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}
