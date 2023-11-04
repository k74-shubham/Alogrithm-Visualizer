import React from 'react'
import "./Sorting.css"
import { useParams } from 'react-router-dom'
import { MergeSort } from './mergeSort/MergeSort';

export const Sorting = () => {
    const { page } = useParams();
  return (
    <div className='container'>
        {page == 'mergesort' && <MergeSort />}
    </div>
  )
}
