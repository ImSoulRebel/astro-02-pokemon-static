import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";
import { extractPokemonId } from "../../utils/extractPokemonId.ts";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const id = extractPokemonId(pokemon.url);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemons") ?? "[]"
    ) as FavoritePokemon[];

    const newFavorites = favorites.filter(
      (newFavorite) => newFavorite.name !== pokemon.name
    );
    localStorage.setItem("favoritePokemons", JSON.stringify(newFavorites));
    setIsVisible(false);
  };
  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={image}
            alt={pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: /pokemons/${pokemon.name}`}
          />
          <p class="capitalize">
            #{id} {pokemon.name}
          </p>
        </a>
        <button class="text-red-400" onClick={deleteFavorite}>
          Borrar
        </button>
      </div>
    </Show>
  );
};
