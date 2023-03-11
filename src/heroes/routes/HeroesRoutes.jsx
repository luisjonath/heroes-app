import React from 'react'
import { Navbar } from "../../ui"
import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DcPage, HeroPage, SearchPage  } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
        <Routes>
            <Route path="/marvel" element={<MarvelPage />}></Route>
            <Route path="dc" element={<DcPage />}></Route>

            <Route path="search" element={<SearchPage />}></Route>
            <Route path="hero/:id" element={<HeroPage />}></Route>


            <Route path='/' element={<Navigate to="/marvel" />}></Route>

        </Routes>
        </div>
       
    </>
  )
}
