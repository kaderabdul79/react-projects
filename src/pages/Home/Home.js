import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../../components/Shared/Navigation/StudentCard/StudentCard';

const Home = () => {
    return (
        <div>
            Our Homepage!!
            <StudentCard></StudentCard>
        </div>
    );
};

export default Home;