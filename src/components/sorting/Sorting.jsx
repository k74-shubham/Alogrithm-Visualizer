import React from 'react'
import "./Sorting.css"
import { useParams } from 'react-router-dom'
import { MergeSort } from './mergeSort/MergeSort';
import { SelectionSort } from './SelectionSort/SelectionSort';
import { BubbleSort } from './BubbleSort/BubbleSort';
import { InsertionSort } from './InsertionSort/InsertionSort';
import { QuickSort } from './QuickSort/QuickSort';

export const Sorting = () => {
    const { page } = useParams();
  return (
    <div className='container'>
        {page === 'mergesort' && <MergeSort />}
        {page === "selectionsort" && <SelectionSort />}
        {page === "bubblesort" && <BubbleSort />}
        {page === "insertionsort" && <InsertionSort />}
        {page === "quicksort" && <QuickSort />}
    </div>
  )
}