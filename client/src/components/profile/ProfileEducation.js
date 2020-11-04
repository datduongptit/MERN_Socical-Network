import React from 'react';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, from , to, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'> {school} </h3>
      <p>
      {from.slice(0, 10)} {' - '}
        {current ? ' Now' :  to.slice(0, 10) }
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};



export default ProfileEducation;
