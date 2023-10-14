import { StyleSheet } from "react-native";

const cardPokeStyles = StyleSheet.create({
  card: {
    width: 175,
    height: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'none'
  },

  title: {
    fontWeight: "bold"
  }
})

export default cardPokeStyles;