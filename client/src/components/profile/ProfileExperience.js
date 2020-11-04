import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, from, to, description },
}) => {
  return (
    <div>
      <h3 className='text-dark'> {company} </h3>
      <p>
        {from.slice(0, 10)} {' - '}
        {/* <Moment format='YYYY/MM/DD'> {from} </Moment> -{' '} */}
        {current ? ' Now' :  to.slice(0, 10) }
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
