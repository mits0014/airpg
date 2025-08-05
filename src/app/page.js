import Image from 'next/image'
import CharacterCard from '@/components/characterCard/CharacterCard'
import Inventory from '@/components/Inventory/Inventory'
import Chat from '@/components/Chat/Chat'
import Map from '@/components/Map/Map'

export default function Home() {
  return (
    <main className="main-bg">
      <div className="layout-grid">
        <div className="column">
          <CharacterCard />
        </div>
        <div className="column">
          <Inventory />
          <Map />
        </div>
        <div className="column">
          <Chat />
        </div>
      </div>
    </main>
  )
}
