import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { setupAPIClient } from './../../services/api'
import { useState } from 'react'

import styles from './../../styles/components/index/chefCard.module.css'

type Chefs = Chef[]


type Chef = {
  _id: number,
  name: string,
  position: string[]
}



export default function ChefCard() {
  const [chefs, setChefs] = useState<Chefs>()

  useEffect(() => {
    const response = setupAPIClient('undefined')
      .get('/profile/show/employee')
      .then(res => { setChefs(res.data) })


  }, [])


  const responsive = {
    tablet: {
      breakpoint: { max: 1920, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section>
      {
        chefs && <Carousel infinite={true} className={styles.main} responsive={responsive}>
          {chefs?.map((item: Chef, number) => {
            return (
              <div key={number}>
                {item.name}
                {item._id}
                {item.position}
              </div>
            )
          })}
        </Carousel>
      }
    </section>
  )
}


