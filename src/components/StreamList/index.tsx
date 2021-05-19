import React from 'react';
import {
        List, 
        StreamContainer, 
        StreamThumbnail, 
        StreamColumn,
        StreamDescription,
        StreamCategory, 
        StreamRow,
        TagRow,
        TagText,
        TagView, 
        StreamHeader, 
        StreamAvatar, 
        StreamUsername,
        User} from './styles';
import data from './data';

interface StreamProps{
  item: typeof data[0]
}

const StreamList: React.FC = () => {
  
  const StreamItem: React.FC<StreamProps> = ({ item }) => (
    <StreamContainer>
      {/* Image */}
      <StreamThumbnail source={item.source} />
      {/* Rows */}
      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar>
              <User source={item.user} />
            </StreamAvatar>
            <StreamUsername numberOfLines={1}>{item.name}</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>{item.description}</StreamDescription>

          <StreamCategory numberOfLines={1}>{item.category}</StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>vitoria3g</TagText>
          </TagView>
          <TagView>
            <TagText>_vitoria_carolina_</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  )

  return (
    <List>
      {data.map((item) => (
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default StreamList;