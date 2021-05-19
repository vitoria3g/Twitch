import React from 'react';
import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
  User
} from './styles';
import data from './users';

interface ChannelProps{
  item: typeof data[0];
}

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC<ChannelProps> = ({item}) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar><User source={item.source}/></Avatar>
        <Column>
          <Username>{item.name}</Username>
          <Info>{item.description}</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <ChannelItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default ChannelList;