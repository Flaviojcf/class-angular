# Place My Order

O Place My Order é uma aplicação para gerenciar pedidos de restaurantes, clientes e serviços relacionados.

## Funcionalidades

- **Gerenciamento de Restaurantes**: Criar, atualizar e listar informações dos restaurantes.
- **Gerenciamento de Pedidos**: Rastrear e gerenciar pedidos de clientes.
- **Integração com Serviços Externos**: Validar endereços usando serviços externos.
- **Serviços de Validação**: Garantir que os pedidos atendam aos requisitos necessários.

## Tecnologias Utilizadas

- Angular 19.1.4
- TypeScript
- RxJS
- Bootstrap
- Ngx-Bootstrap

## Estrutura do Projeto

- **src/app**: Contém os componentes, serviços, diretivas e pipes da aplicação.
  - **components**: Componentes da aplicação, como o componente de pedidos.
    - [order.component.ts](src/app/components/order/order.component.ts): Componente para gerenciar pedidos.
  - **services**: Serviços da aplicação, como o serviço de pedidos.
    - [order.service.ts](src/app/services/order/order.service.ts): Serviço para gerenciar pedidos.
  - **interfaces**: Interfaces utilizadas na aplicação.
  - **pipes**: Pipes personalizados utilizados na aplicação.
- **src/environments**: Configurações de ambiente.
  - [environment.ts](src/environments/environment.ts): Configurações de ambiente de desenvolvimento.

## Variáveis de Ambiente

As variáveis de ambiente estão configuradas no arquivo [`environment.ts`](src/environments/environment.ts). Por exemplo:

```typescript
export const environment = {
    production: true,
    apiUrl: 'http://localhost:7070',
};
```

## Contato

[@Flaviojcf](mailto:flaviojcostafilho@gmail.com)