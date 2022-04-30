import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{ nome }</Texto>
  </View>
}
//Dentro da View é sempre bom colocar a imagem por primeiro ao inves do texto, pois assim se quiser fazer com que haja uma sobre-escrita por cima da imagem, so assim será possivel, ao contrario, isso nao será possivel, pois a imagem fica em cima do texto e assim nao da para ver o texto escrito.

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },
});