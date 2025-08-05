import Image from 'next/image'
import CharacterCard from '@/components/CharacterCard'
import Inventory from '@/components/Inventory'
import Chat from '@/components/Chat'
import Map from '@/components/Map'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {/* Coluna Esquerda */}
        <div className="space-y-4">
          <CharacterCard />
        </div>

        {/* Coluna Central */}
        <div className="space-y-4">
          <Inventory />
          <Map />
        </div>

        {/* Coluna Direita */}
        <div>
          <Chat />
        </div>
      </div>
    </main>
  )
}
