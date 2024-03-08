import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LearningObjectives from '../../sidebarpages/LearningObjectives';
import Instructions from '../../sidebarpages/Instructions';
import VideoTutorial from '../../sidebarpages/VideoTutorial';
import MakeProject from '../../sidebarpages/MakeProject';
import SubmitProject from '../../sidebarpages/SubmitProject';
import BonusChallenge from '../../sidebarpages/BonusChallenge';
import TakeTheQuiz from '../../sidebarpages/TakeTheQuiz';
import "./Navbar.css"

function NavPage() {
  return (
    <div className='navpage'>
        <Routes>
            <Route path='/' element={<LearningObjectives/>} />
            <Route path='/instructions' element={<Instructions/>} />
            <Route path='/videotutorial' element={<VideoTutorial/>} />
            <Route path='/makeproject' element={<MakeProject/>} />
            <Route path='/submitproject' element={<SubmitProject/>} />
            <Route path='/bonuschallenge' element={<BonusChallenge/>} />
            <Route path='/takethequiz' element={<TakeTheQuiz/>} />
        </Routes>
    </div>
  )
}

export default NavPage