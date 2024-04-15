import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css';
import userImage from '../assets/images/photo.png'
import { BiEdit } from 'react-icons/bi';

const courses = [
  {
    title: 'English',
    icon: <BiEdit />,
    duration: '2 hours',
  },
  {
    title: 'English',
    icon: <BiEdit />,
    duration: '2 hours',
  },
  {
    title: 'English',
    icon: <BiEdit />,
    duration: '2 hours',
  }
];

function Profile() {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className='user--profile'>
        <div className='user--detail'>
          <img src={userImage} />
          <h3 className='username'>John</h3>
          <span className='profession'>Teacher</span>
        </div>

        <div className='user-courses'>
          {courses.map((course) => (
            <div className='course'>
              <div className='course--detail'>
                <div className='course--cover'>{course.icon}</div>
                <div className='course--name'>
                  <h5 className='title'>{course.title}</h5>
                  <span className='duration'>{course.duration}</span>
                </div>
              </div>

              <div className='action'>:</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Profile
