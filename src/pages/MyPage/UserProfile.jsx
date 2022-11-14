import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.scss';

function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios
      .get('http://54.180.132.155:9000/users/info', headers)
      .then((res) => {
        const data = res.data.result;
        setUserInfo(data);
      })
      .catch((err) => new Error(err));
  }, []);

  return (
    <div className="myssg_user_profile">
      <span className="modal_btn_profile myssg_profile_photo clickable">
        <img src="https://sui.ssgcdn.com/ui/m_ssg/img/@100x100.png" alt="" />
        <span className="myssg_profile_setting">
          <span className="blind">프로필편집</span>
        </span>
      </span>
      <span className="myssg_profile_info">
        <div className="myssg_user_name">
          <span>{userInfo && userInfo.name}</span>
        </div>
        <div className="myssg_user_grade">
          <span>
            <p>
              <strong className="myssg_primary_text">FRIENDS</strong>{' '}
              등급입니다.
            </p>
          </span>
        </div>
      </span>
    </div>
  );
}

export default UserProfile;
