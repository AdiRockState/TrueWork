import React, { useState } from 'react';
import styles from './profile.module.css';
import StatIcon from '/icons-1/Star.svg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    previous_investment: [],
    credit_score: '',
  });

  const [phone, setPhone] = useState('');

  const previousInvestmentOptions = [
    { value: 'Stock & Mutual Fund', label: 'Stock & Mutual Fund' },
    { value: 'Gold, FD & Bond', label: 'Gold, FD & Bond' },
    { value: 'Real Estate', label: 'Real Estate' },
    { value: 'Other', label: 'Other' },
  ];

  const creditScoreOptions = [
    { value: 'Below 500', label: 'Below 500' },
    { value: '500-600', label: '500-600' },
    { value: '600-700', label: '600-700' },
    { value: '700-800', label: '700-800' },
    { value: 'Above 800', label: 'Above 800' },
  ];

  const handleToggleSelect = (name, value) => {
    const currentValue = profile[name];
    if (Array.isArray(currentValue)) {
      if (currentValue.includes(value)) {
        updateProfile(name, currentValue.filter(item => item !== value));
      } else {
        updateProfile(name, [...currentValue, value]);
      }
    } else {
      updateProfile(name, currentValue === value ? '' : value);
    }
  };

  const handlePhoneChange = (value, country) => {  
      
    const formattedPhone = value.replace(/[^0-9]/g, '');

    if (isPossiblePhoneNumber(formattedPhone) && isValidPhoneNumber(formattedPhone)) {
        setPhone(formattedPhone);
        console.log(a)
      }
  };

  const updateProfile = (name, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const renderToggleButtons = (name, options) => {
    return options.map(option => (
      <button
        key={option.value}
        type="button"
        className={`${styles.button} ${profile[name].includes(option.value) ? styles.selected : ''}`}
        onClick={() => handleToggleSelect(name, option.value)}
      >
        {option.label}
      </button>
    ));
  };

  return (
    <div className="flex p-6">
      {/* Left Column */}
      <div className="w-1/2 pr-4">
        <h2 className={`${styles.heading} mb-4`}>Basic Details</h2>
        <div className="flex items-center mb-4">
          <img
            src={StatIcon}
            alt="Profile"
            className="rounded-full h-24 w-24 object-cover mr-4"
          />
          <button className={`${styles.button2} px-4 py-2`}><span className={styles.button2_txt}>Upload New Photo</span></button>
        </div>
        <h3 className={`${styles.subheading} mb-2`}>Name</h3>
        <input type="text" className="w-full p-2 mb-4 border rounded-md focus:outline-none" />
        <div className="flex flex-wrap mb-4">
          <div className="w-1/2 pr-2 mb-4">
            <h3 className={`${styles.subheading} mb-2`}>Marital Status</h3>
            <select className="w-full p-2 border-2 rounded-md focus:outline-none">
              <option>Select</option>
              <option>Married</option>
              <option>Single</option>
            </select>
          </div>
          <div className="w-1/2 pl-2 mb-4">
            <h3 className={`${styles.subheading} mb-2`}>Gender</h3>
            <select className="w-full p-2 border-2 rounded-md focus:outline-none">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="w-1/2 pr-2 mb-4">
            <h3 className={`${styles.subheading} mb-2`}>Preferred Language</h3>
            <select className="w-full p-2 border-2 rounded-md focus:outline-none">
              <option>Select</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Kannada</option>
            </select>
          </div>
        </div>
        <h2 className={`${styles.heading} mb-4`}>Other</h2>
        <h3 className={`${styles.subheading} mb-2`}>Previous Investment</h3>
        <div className="flex flex-wrap">
          {renderToggleButtons('previous_investment', previousInvestmentOptions)}
        </div>
        <h3 className={`${styles.subheading} mb-2`}>Credit Score</h3>
        <div className="flex flex-wrap">
          {renderToggleButtons('credit_score', creditScoreOptions)}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 pl-4">
        <h2 className={`${styles.heading} mb-4`}>Contact Details</h2>
        <h3 className={`${styles.subheading} mb-2`}>Phone Number*</h3>
        <div className="flex items-center mb-4">
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={phone => setPhone(phone)}
            countryCodeEditable={false}
            inputClass="w-full p-2 border rounded-md"
          />
        </div>
        <h3 className={`${styles.subheading} mb-2`}>Email</h3>
        <input type="email" className="w-full p-2 mb-4 border-2 rounded-md focus:outline-none" />
        <h3 className={`${styles.subheading} mb-2`}>LinkedIn Profile</h3>
        <input type="url" className="w-full p-2 mb-4 border-2 rounded-md focus:outline-none" placeholder="LinkedIn URL" />
      </div>
    </div>
  );
};

export default Profile;
