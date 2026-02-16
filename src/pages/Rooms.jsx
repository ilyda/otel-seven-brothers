import React from 'react'
import PageBanner from '../components/PageBanner'
import RoomsSections from '../components/RoomsSections'

const Rooms = () => {
    
  return (<>
      <PageBanner title={"Odalarımız"}></PageBanner>
      <div>
  
      </div>
          <section className="pt-24 pb-10 bg-[#f5f6f7]">
      <div className="text-center  max-w-[800px] m-auto">
        <p className="text-sm">Odalarımız ve süitlerimiz Anadolu mirasını çağdaş olan
        aklarla harmanlayarak zamansız bir stil anlayışını yansıtmaktadır. K
        apadokya’da benzersiz bir konaklama için ahşap, doğal taş ve mermeri mode
        rn teknoloji ve görkemli kumaşlarla bir araya getirdik. Odalarımız ortak bir tasa
        rım dilini paylaşsa da her biri kendine özgüdür. Ayrıca, her odaya karakter katan benzersiz b
        ir geleneksel Türk halısı bulunmaktadır. Kapadokya Manzaralı odalarımız, sabahın erken saatl
        erinde balonların yükselişini izlemek veya akşam gün batımının keyfini çıkarmak için inanılmaz manzaralarsunar.</p>
          
      </div>

    </section>

<RoomsSections></RoomsSections>
  </>

  )
}

export default Rooms
