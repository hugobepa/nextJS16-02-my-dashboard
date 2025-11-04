import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5";



export const metadata = {
 title: 'Favoritos',
 description: 'Aliquip ipsum do elit anim sint ea ullamco voluptate Lorem.',
};






export default async function PokemonsPage() {

      

  return (
    <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global state</small></span>

        

                  {/* <PokemonGrid  pokemons={[]} /> */}
                  <FavoritePokemons />
                  {/* <NoFavorites /> */}
                

            
            
        
    </div>
  );
}

