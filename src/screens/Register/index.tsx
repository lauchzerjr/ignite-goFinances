import React, { useState } from 'react';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransationsType,
} from './styles';
import { TransationTypeButton } from '../../components/Form/TransationTypeButton';

export function Register() {
  const [transactionType, setTransactionType] = useState()

  function handleTransationTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />

          <Input
            placeholder='Preço'
          />
          <TransationsType>
            <TransationTypeButton
              title='Income'
              type='up'
              onPress={() => handleTransationTypeSelect('up')}
              isActive={transactionType === 'up'}
              />

            <TransationTypeButton
              title='Outcome'
              type='down'
              onPress={() => handleTransationTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransationsType>

        </Fields>

        <Button title='Enviar' />
      </Form>

    </Container>
  );
}