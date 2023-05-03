import { Center, Heading, Highlight, Image } from '@chakra-ui/react';
import { ChallengeCard } from '../../components/ChallengeCard/ChallengeCard';
export function Welcome() {
  return (
    <Center flexDirection="column">
      <Center>
        <Image
          src="/src/assets/logo.png"
          objectFit="cover"
          height="120px"
          width="120px"
          alt="Dan Abramov"
        />
      </Center>
      <Center flexDirection="column" width="600px" marginBottom="40px">
        <Heading fontSize={26} color="accent.white.1000">
          Salveee!
        </Heading>
        <Highlight
          query="Suporte Guy da Yazo"
          styles={{
            px: '0.5',
            py: '0.5',
            bg: '#303357',
            color: 'orange',
            fontSize: '20px',
          }}
        >
          Bem-vindo(a) ao desafio de Suporte Guy da Yazo
        </Highlight>
      </Center>

      <Heading fontSize={26} color="accent.white.1000">
        Escolha um desafio
      </Heading>
      <Center gap={4}>
        <ChallengeCard
          titleChallenge="Desafio 1 - Tela de Login"
          link="/login"
          descriptionChallenge="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas corrupti cum animi incidunt atque similique illo nostrum, culpa aut asperiores esse mollitia tempora, voluptates nulla quidem nam doloremque blanditiis libero."
        />
        <ChallengeCard
          titleChallenge="Desafio 2 - Agenda"
          link="/schedules"
          descriptionChallenge="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas corrupti cum animi incidunt atque similique illo nostrum, culpa aut asperiores esse mollitia tempora, voluptates nulla quidem nam doloremque blanditiis libero."
        />
        <ChallengeCard
          titleChallenge="Desafio 3 - Relatórios"
          link="/reports"
          descriptionChallenge="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas corrupti cum animi incidunt atque similique illo nostrum, culpa aut asperiores esse mollitia tempora, voluptates nulla quidem nam doloremque blanditiis libero."
        />
      </Center>
    </Center>
  );
}
