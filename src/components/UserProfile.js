import React from 'react';
import './UserProfile.css'; // Ensure to link the CSS file

const UserProfile = () => {
    return (
        <div className="user-profile">
            {/* First Container: Profile Image and Name */}
            <div className="user-profile-container">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    className="profile-picture"
                />
                <h3>Faraz Akhtar</h3>
                <p className="user-phone">+965 1234 5678</p>
            </div>

            {/* Second Container: General Information */}
            <div className="user-info-container">
                <h4>General Information</h4>
                <div className="info-group">
                    <p><strong>First Name:</strong> Faraz</p>
                    <p><strong>Last Name:</strong> Akhtar</p>
                </div>
            </div>

            {/* Third Container: Security Information */}
            <div className="user-info-container">
                <h4>Security</h4>
                <div className="info-group">
                    <p><strong>Email:</strong> address@email.com</p>
                    <p><strong>Password:</strong> ********</p>
                    <p><strong>Phone Number:</strong> +965 1234 5678</p>
                </div>
            </div>

            {/* Fourth Container: Address Information */}
            <div className="user-address-container">
                <h4>Address</h4>
                <p><strong>Country:</strong> Kuwait</p>
                <p><strong>City:</strong> Kuwait City</p>
                <p><strong>Street:</strong> Gulf Road</p>
                <p><strong>Pincode:</strong> 13000</p>
            </div>
        </div>
    );
};

export default UserProfile;
