import React from 'react';
import { 
  Container, 
  Avatar,
  RightSide, 
  OnlineStatus, 
  Button,
  User} from './styles';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import user from '../../images/streamList/user.jpg';
import colors from '../../styles/colors';


const Header: React.FC = ()=>{
  return (
      <Container>
        
        <Avatar>
          <User source={user} />
          <OnlineStatus/>
        </Avatar>

        <RightSide>
          <Button>
            <MaterialIcons name="notifications-none" size={26} color={colors.black}/>
          </Button>
          <Button>
            <MaterialCommunityIcons name="message-outline" size={26} color={colors.black}/>
          </Button>
          <Button>
            <Feather name="search" size={26} color={colors.black}/>
          </Button>
        </RightSide>

      </Container>
  )
}

export default Header;
