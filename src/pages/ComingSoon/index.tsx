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
import Carousel from '../../components/Carousel';


interface Item {
  key:string;
  render: ()=> JSX.Element;
  isTitle?: boolean;
}
const ComingSoon: React.FC = ()=>{
  
  const {data, listKeyTitle} = React.useMemo(()=>{
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: ()=> <Heading>Descubra</Heading>
      },
      {
        key: 'VIDEOS',
        render: ()=> <Carousel/>
      },
      {
        key: 'LIKE_VIDEOS',
        render: ()=> <Title>Categorias que achamos que vai gostar</Title>,
        isTitle: true
      },
      
      {
        key: 'LINE_1',
        render: ()=> <CategoryList/>
      }
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

export default ComingSoon;