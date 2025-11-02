import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from 'next/image'

const getPokemons = async (limit=20,offset=0):Promise<SimplePokemon[]>=>{

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then (res => res.json());
    //const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then (res => res.json());

    const pokemons = data.results.map(pokemon=>({
         id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,

    }     
    ))

   //throw new Error ('Este error no deberia suceder');

    return pokemons;
}




export default async function PokemonsPage() {

      
    const pokemons = await getPokemons(20);

  return (
    <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pokemons <small>estatico</small></span>

         <div  className="flex  flex-wrap gap-10 items-center justify-center">

            {
                pokemons.map((pokemon)=>(
                /*                  
                     <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width ={100}
                height={100}
                alt={pokemon.name}
                key ={pokemon.id}
                  />
                    */

                  <PokemonGrid key={pokemon.id} pokemons={pokemons} />
                ))

            }
            
         </div>
    </div>
  );
}