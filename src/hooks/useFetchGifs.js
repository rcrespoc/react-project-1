import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGirfs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category).then(imgs => {
      setState( (s) => (
        {
          ...s, 
          data: imgs, 
          loading: false
        }
      ))
    })
  }, [])
  return {...state};
}