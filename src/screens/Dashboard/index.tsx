import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de App',
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '03/05/2022',
  },
  {
    id: '2',
    type: 'negative',
    title: 'pizza',
    amount: "R$ 12.000,00",
    category: {
      name: 'alimentação',
      icon: 'dollar-sign'
    },
    date: '03/05/2022',
  },
  {
    id: '3',
    type: 'positive',
    title: 'Desenvolvimento de App',
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '03/05/2022',
  }]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/lauchzerjr.png' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Adalberto</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      >
        <HighlightCard
          type='up'
          title='Entradas'
          amount='1000000'
          lastTransaction='01/06/2022'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='2000'
          lastTransaction='02/06/2022'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='100000000000'
          lastTransaction='01 á 30 de junho'
        />

      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />


      </Transactions>

    </Container>
  );
}