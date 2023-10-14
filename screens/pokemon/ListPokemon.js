import { Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet } from "react-native"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"
import { View } from "react-native"
import gamesPageStyles from "../../styles/gamesPageStyles"
import cardPokeStyles from "../../styles/cardPokeStyles"
import COLORS from "../../util/colorsTypePoke"


const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    apiPoke.get('/pokemon').then(async (resultado) => {
      const pokemonList = resultado.data.results;
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await apiPoke.get(pokemon.url);
          return response.data;
        })
      );
      setPokemons(detailedPokemonList);
    });
  }, []);

  const getBackgroundColor = (pokemon) => {
    if (pokemon.abilities && pokemon.abilities.length > 0) {
      const firstAbility = pokemon.abilities[0].ability.name;
      return { backgroundColor: COLORS[firstAbility] || '#DCDCDC' }; // Cor padrão, caso não corresponda a nenhuma habilidade
    }
    return { backgroundColor: '#DCDCDC' }; // Cor padrão, caso não haja habilidades
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={gamesPageStyles.container}>
        {pokemons.map((item) => (
          <View key={item.id}>
            <Card
              onPress={() => navigation.push('Detalhes-Poke', { id: item.name })}
              style={[cardPokeStyles.card, getBackgroundColor(item)]}
            >
              {item.sprites && (
                <Card.Cover source={{ uri: item.sprites.other.dream_world.front_default }} style={cardPokeStyles.image} />
              )}
              <Text variant="titleLarge">{item.name}</Text>
            </Card>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}


export default ListPokemon

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#131016',
    padding: 45,
  },
  card: {

  }
})

