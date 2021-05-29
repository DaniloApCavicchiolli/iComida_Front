import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { withTheme, List } from 'react-native-paper'
import Header from '../components/Header'

function Home({navigation, theme}){
    const { colors } = theme
    const opcoes = [
        {id: 1, nome:'Categorias', descricao: 'Categorias de Restaurantes',
        icone: 'blur', menu: 'ListaCategorias'},
        {id: 2, nome: 'Configurações', descricao: 'Configurações do Aplicativo',
        icone: 'cog', menu: 'Configuracoes'}
    ]
    return(
        <>
            <Header titulo="Área Administrativa" subtitulo="iComida" back={false} />
            <View style={{backgroundColor: colors.surface, paddingHorizontal: 10,
                          paddingHorizontal: 20, flex: 1}}>
               <List.Subheader>Slecione uma das opções</List.Subheader>
               <FlatList data={opcoes} renderItem={({item}) => (
                   <List.Item 
                    title={item.nome}
                    style={{backgroundColor: colors.background}}
                    titleStyle={{fontSize: 20}}
                    description={item.descricao}
                    descriptionStyle={{marginBottom: 5}}
                    onPress={() => navigation.navigate(item.menu)}
                    left={props => <List.Icon {...props} icon={item.icone} />}
                   />
               )}
               keyExtractor={item => item.id.toString()}
               />
            </View>
        </>
    )
}

export default withTheme(Home)