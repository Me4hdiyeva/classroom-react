import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/img/Mathematicsamico.png";
import Swal from 'sweetalert2';


const Settings = () => {
    const { username } = useParams();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        major: '',
        bio: '',
        socialLinks: '',
        email: '',
    });

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`https://aquatic-supreme-saga.glitch.me/users`)
            .then((response) => {
                const users = response.data;
                const matchedUser = users.find(user => user.username === username);

                if (matchedUser) {
                    setUserData(matchedUser);
                } else {
                    console.error('User not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message);
            });
    }, [username]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`https://aquatic-supreme-saga.glitch.me/users/${userData.id}`, userData)
            .then(() => {
                Swal.fire({
                    title: "Data updated successfully!",
                    icon: "success",
                    draggable: true
                  });
                // alert('Data updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating data:', error.message);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleDelete = () => {
        const confirmation = window.confirm("Are you sure you want to delete your account?");
        if (confirmation) {
            axios
                .delete(`https://aquatic-supreme-saga.glitch.me/users/${userData.id}`)
                .then(() => {
                  
                    Swal.fire({
                        title: "Your account has been deleted.",
                        icon: "success",
                        draggable: true
                      });
              
                    navigate("/")
                })
                .catch((error) => {
                    console.error('Error deleting account:', error.message);
                });
        }
    };

    return (
        <div style={{ padding: '40px 0 0 350px' }}>
            <h1 style={{ fontSize: '40px', paddingLeft: '400px' }} className="text-[#4D167A] font-bold">
                Settings
            </h1>
            <div style={{ display: "flex" }}>
                <div>
                    <div style={{ width: "450px", marginTop: "80px" }}>
                        <img src={logo} alt="" />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="form-container">
                    {[
                        { label: 'Name', name: 'username', type: 'text' },
                        { label: 'Password', name: 'password', type: 'text' },
                        { label: 'Major', name: 'major', type: 'text' },
                        { label: 'Bio', name: 'bio', type: 'text' },
                        { label: 'Social Links', name: 'socialLinks', type: 'url' },
                        { label: 'Email', name: 'email', type: 'email' },
                    ].map(({ label, name, type }) => (
                        <div key={name} className="form-group">
                            <label htmlFor={name} className="form-label text-[#4D167A]">
                                {label}
                            </label>
                            <input
                                type={type}
                                id={name}
                                name={name}
                                value={userData[name] || ''}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                    ))}
                    <button type="submit" className="submit-btn">
                        Save Changes
                    </button>
                </form>
            </div>
            <button style={{ marginLeft: "00px" }} onClick={handleDelete} className="submit-btn">
                Delete Account
           
            </button>
        </div>
    );
};

export default Settings;
