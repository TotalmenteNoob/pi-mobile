import CardPoke from "../../components/CardPoke"
import { ScrollView, TouchableOpacity, View } from "react-native";
import gamesPageStyles from "../../styles/gamesPageStyles";
import { Button } from "react-native-paper";

const Games = ({ navigation }) => {

  const games = [
    {
      id: 1,
      name: "Jogo da mémoria",
      type: "electric",
      icon: "https://cdn-icons-png.flaticon.com/128/6168/6168860.png",
      page: "level-memory-game"
    },
    {
      id: 2,
      name: "Duelo",
      type: "water",
      icon: "https://cdn-icons-png.flaticon.com/128/9743/9743507.png",
      page: "duel-page"
    },
    {
      id: 3,
      name: "Quiz",
      type: "fire",
      icon: "https://cdn-icons-png.flaticon.com/128/4403/4403531.png",
      page: "quiz-page"
    },
    {
      id: 4,
      name: "Comparador",
      type: "grass",
      icon: "https://cdn-icons-png.flaticon.com/128/1555/1555771.png",
      page: "comparator-page"
    }
  ]

  return (
    <>
      <ScrollView>
        <View style={gamesPageStyles.container}>
          {games.map(item => (
            <TouchableOpacity key={item.id} onPress={() => navigation.push(item.page)}>
              <CardPoke key={item.id} style={gamesPageStyles.card} infos={item}></CardPoke>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default Games