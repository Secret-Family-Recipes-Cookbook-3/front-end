import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Navigation from './Navigation';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navigation />
      {/* <RecipeCard /> */}
    </div>
  );
}

export default Dashboard;
