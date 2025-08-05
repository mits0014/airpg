export default function CharacterCard() {
  return (
    <div className="bg-[#2e2b29] p-4 rounded shadow-lg text-sm space-y-4">
      <div className="grid grid-cols-2 gap-2 text-center font-bold">
        <div>Raça</div><div>Altura</div>
      </div>

      <div className="flex justify-center">
        <img src="/portrait.jpg" alt="Personagem" className="w-48 rounded" />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-lg font-semibold">
        <div>FOR<br />18</div>
        <div>DES<br />10</div>
        <div>CONS<br />3</div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Vida</span>
          <span>30/30</span>
        </div>
        <div className="h-2 bg-red-500 w-full rounded"></div>

        <div className="flex justify-between">
          <span>Mana</span>
          <span>30/30</span>
        </div>
        <div className="h-2 bg-blue-500 w-full rounded"></div>
      </div>

      <div>
        <h3 className="font-semibold mb-1">Habilidades</h3>
        <div className="flex gap-1">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="w-5 h-5 bg-[#3c2615] rounded-full"></div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-1">História</h3>
        <div className="bg-[#e7d3a1] text-black p-2 text-xs rounded h-24 overflow-y-auto">
          A Loba de Velyndor. No coração do continente de Eldaros, entre montanhas enevoadas e vales esquecidos...
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-1">Ligações</h3>
        <ul className="space-y-1">
          <li className="flex justify-between bg-[#3c2615] p-1 rounded">Npc 1 <span>100</span></li>
          <li className="flex justify-between bg-[#3c2615] p-1 rounded">Npc 2 <span>100</span></li>
          <li className="flex justify-between bg-[#3c2615] p-1 rounded">Npc 3 <span>100</span></li>
        </ul>
      </div>
    </div>
  )
}
