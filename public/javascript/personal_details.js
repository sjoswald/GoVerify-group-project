function showPassword() {
    let input1 = document.getElementById("input-pd-password");
    if (input1.type === "password") {
      input1.type = "text";
    } else {
      input1.type = "password";
    }
  } 

  function showConfirmPassword() {
    let input2 = document.getElementById("input-pd-confirm-password");
    if (input2.type === "password") {
      input2.type = "text";
    } else {
      input2.type = "password";
    }
  } 
  
  function onChange() {
    const password = document.getElementById("input-pd-password");
    const confirm = document.getElementById("input-pd-confirm-password");
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }

