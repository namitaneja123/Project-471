function signIn(userType) {
    switch (userType) {
        case 'owner':
            window.location.href = 'ownerSignIn.html';
            break;
        case 'employee':
            window.location.href = 'employeeSignIn.html';
            break;
        case 'member':
            window.location.href = 'memberSignIn.html';
            break;

        case 'newmember':
            window.location.href = 'newMember.html';
            break;
        case 'memberPlans':
            window.location.href = 'membershipPlans.html';
            break;
        default:
            break;
    }
}

function signInAsOwner(event) {
    event.preventDefault(); // Prevent form submission (to handle it manually)

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation or further actions with userName and password here
    if (userName === 'owner' && password === 'password') {
        alert('Owner Sign-in Successful!');
        // Redirect or perform other actions after successful sign-in
        window.location.href = 'OwnerDashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function signInAsEmployee(event) {
    event.preventDefault(); // Prevent form submission (to handle it manually)

    const userName = document.getElementById('empUsername').value;
    const password = document.getElementById('empPassword').value;

    // Perform validation or further actions with userName and password here
    if (userName === 'employee' && password === 'password') {
        alert('Employee Sign-in Successful!');
        // Redirect or perform other actions after successful sign-in
        window.location.href = 'employeeDashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function signInAsMember(event) {
    event.preventDefault(); // Prevent form submission (to handle it manually)

    const userName = document.getElementById('memberUsername').value;
    const password = document.getElementById('memberPassword').value;

    // Perform validation or further actions with userName and password here
    if (userName === 'member' && password === 'password') {
        alert('Member Sign-in Successful!');
        // Redirect or perform other actions after successful sign-in
        window.location.href = 'memberDashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function updatedEmployeeInfo(event) {
    event.preventDefault(); // Prevent form submission (to handle it manually)

    const username = document.getElementById('username').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const timeSlot = document.getElementById('timeSlot').value;

    // Check if any of the fields are empty
    if (username.trim() === '' || currentPassword.trim() === '' || newPassword.trim() === '') {
        alert('Please fill in all the fields.');
        return; // Prevent further execution of the function
    }
}

function editOwnerInfo(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const username = document.getElementsByName('username').value;
    const currentPassword = document.getElementsByName('current_password').value;
    const newPassword = document.getElementsByName('new_password').value;

    document.getElementsByName('username').value='';
    document.getElementsByName('current_password').value='';
    document.getElementsByName('new_password').value='';
}

function addTrainer(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const trainerUsername = document.getElementsByName('trainer_username').value;
    const trainerPassword = document.getElementsByName('trainer_password').value;

}

function removeTrainer(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const removeTrainerUsername = document.getElementsByName('remove_trainer_username').value;
}

function setMaintenance(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const selectedEquipment = document.getElementById('equipment').value;

}

function selectSession(event) {
    event.preventDefault();
    // Get selected session value
    const selectedSession = document.getElementById('session').value;

    // Perform actions with the selected session (e.g., store in localStorage, display, etc.)
    console.log('Selected Session:', selectedSession);
}

function member_info_update(event){

    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const username = document.getElementById('username').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const availableTime = document.getElementById('availableTime').value;
    
}

