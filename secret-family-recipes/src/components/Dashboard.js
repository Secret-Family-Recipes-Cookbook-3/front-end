import React, { useEffect, useState } from 'react';
import Recipes from './AddRecipes';
import Navigation from './Navigation';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navigation />
      <Recipes />
    </div>
  );
}

export default Dashboard;
