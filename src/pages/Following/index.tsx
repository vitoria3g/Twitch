import React from 'react';
import {FlatList} from 'react-native';
import {Container, Wrapper, Main} from '../../styles/styleglobal';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import StreamListContinue from '../../components/StreamListContinue';
import ChannelList from '../../components/ChannelList';

interface Item {
  key:string;
  render: ()=> JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = ()=>{
 const {data, listKeyTitle} = React.useMemo(()=>{
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: ()=> <Heading>Seguindo</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: ()=> <Title>Categorias seguidas</Title>,
        isTitle: true
      },
      
      {
        key: 'LINE_1',
        render: ()=> <CategoryList/>
      },
      {
        key: 'LIVE_CHANNELS',
        render: ()=> <Title>Seus canais ao vivo</Title>,
        isTitle: true
      },
      
      {
        key: 'LINE_2',
        render: ()=> <StreamList/>
      },
      {
        key: 'CONTINUE_WATCHING',
        render: ()=> <Title>Continuar assistindo</Title>,
        isTitle: true
      },
      
      {
        key: 'LINE_3',
        render: ()=> <StreamListContinue/>
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: ()=> <Title>Seus canais off-line</Title>,
        isTitle: true
      },
      {
        key: 'LINE_4',
        render: ()=> <ChannelList/>
      },
    ];

    const listKeyTitle: number[]= [];
    items.forEach((item, index)=> item.isTitle && listKeyTitle.push(index));

    return {
      data: items,
      listKeyTitle
    }

  },[]);

  return (
    <Wrapper>
      <Container>
        <Header/>
        <Main>
          <FlatList<Item> 
            data={data} renderItem={({item})=> item.render()} 
            keyExtractor={item=> item.key} stickyHeaderIndices={listKeyTitle}
            onRefresh={()=>{}} refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  )
}

export default Following;