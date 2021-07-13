
import '../../db.json'
import React, {useMemo} from 'react'
export const MotoList = ({motocycle}) => {

    const motos = useMemo(() => 
    getmotosByPublisher(motos),
    [motos]);
  
      return (
        <section>

        <div class="d-flex justify-content-start">
        {
                 motocycle.map( motocycle => (
                      < motocycle key={ motocycle.id}
                      {... motocycle} />
                  ))
              }
            </div>
        </section>
       
        
      )
  }

