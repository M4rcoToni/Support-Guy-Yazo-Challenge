import { Header } from '../Header/Header';
import { Container } from './wrapperRoutes.styled';
import { WrapperRoutesProps } from './wrapperRoutes.interfaces';
import { Box } from '@chakra-ui/react';

export const WrapperRoutes = ({ hasHeader = true, children, title }: WrapperRoutesProps) => {
  return (
    <Container>
      {hasHeader && <Header title={title} />}

      <Box width="100%" px="143px" pt="100px" pb="24px">{children}</Box>
    </Container>
  );
};
