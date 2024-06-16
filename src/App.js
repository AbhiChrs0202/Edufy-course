import './App.css';
import Appbar from './components/Appbar';
import Homepage from './components/Homepage';

import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import { useState } from 'react';
import CourseDetail from './components/CourseDetail';
import CourseChapters from './components/CourseChapter';
import { coursesData } from './CourseData';
import Footer from './components/Footer';
import FooterComp from './components/Footer';

;

const AppRoutes = ({ courses }) =>{
  const routes = useRoutes([
    { path: '/', element: <Homepage courses={courses} /> },
    { path: '/course/:id', element: <CourseDetail courses={courses} /> },
    { path: '/chapter', element: <CourseChapters /> },
  ]);
  return routes;
};


function App() {
  const [courses, setCourses] = useState(coursesData);
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar />
        <AppRoutes courses = {coursesData} />
      <FooterComp />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
