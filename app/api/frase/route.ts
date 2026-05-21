import { NextResponse } from 'next/server'

const frases = [
  { quote: 'A história é uma testemunha do passado, a luz da verdade, a vida da memória, a mestra da vida.', author: 'Cícero' },
  { quote: 'Quem controla o passado controla o futuro. Quem controla o presente controla o passado.', author: 'George Orwell' },
  { quote: 'A história não se repete, mas frequentemente rima.', author: 'Mark Twain' },
  { quote: 'Um povo que não conhece sua história está condenado a repeti-la.', author: 'Edmund Burke' },
  { quote: 'A história é a versão dos eventos passados com a qual as pessoas decidiram concordar.', author: 'Napoleão Bonaparte' },
  { quote: 'O mundo continuará a se degradar até que o bem seja feito sem hesitação, tal como hoje o mal é feito.', author: 'Franz Kafka' },
  { quote: 'Não há futuro sem passado, porque o que é o amanhã senão o que é hoje que o ontem fez.', author: 'William Faulkner' },
  { quote: 'A história é sempre escrita pelos vencedores.', author: 'Winston Churchill' },
  { quote: 'A ignorância da história nos torna escravos de nossa própria época.', author: 'Marc Bloch' },
  { quote: 'Cada geração se imagina mais inteligente que a anterior e mais sábia que a seguinte.', author: 'George Orwell' },
  { quote: 'O que a história ensina é que os homens não aprendem com a história.', author: 'Georg Hegel' },
  { quote: 'Não é suficiente conquistar; é necessário saber seduzir.', author: 'Voltaire' },
  { quote: 'O passado nunca está morto. Na verdade, nem passou ainda.', author: 'William Faulkner' },
  { quote: 'Um povo sem memória é um povo sem futuro.', author: 'Napoleon Hill' },
  { quote: 'Toda a história do mundo é a história de alguns indivíduos.', author: 'Thomas Carlyle' },
  { quote: 'A história é feita de pequenas vitórias de pessoas que nunca desistiram.', author: 'Nelson Mandela' },
  { quote: 'Não existe nação que não tenha sido construída em cima do sangue de outros.', author: 'Stuart Hall' },
  { quote: 'O importante não é o que a história fez de nós, mas o que nós fazemos com o que a história fez de nós.', author: 'Jean-Paul Sartre' },
  { quote: 'As revoluções são a locomotiva da história.', author: 'Karl Marx' },
  { quote: 'A guerra é a continuação da política por outros meios.', author: 'Carl von Clausewitz' },
  { quote: 'Pensar é o trabalho mais difícil que existe. Talvez seja por isso que tão poucos se dedicam a isso.', author: 'Henry Ford' },
  { quote: 'A glória é fugaz, mas o esquecimento é eterno.', author: 'Napoleão Bonaparte' },
  { quote: 'Toda mudança, mesmo a mais desejada, tem a sua melancolia.', author: 'Anatole France' },
  { quote: 'O tempo é o juiz mais imparcial de todos os julgamentos humanos.', author: 'Alexis de Tocqueville' },
  { quote: 'A história é uma galeria de quadros onde há poucos originais e muitas cópias.', author: 'Alexis de Tocqueville' },
  { quote: 'Os homens fazem sua própria história, mas não a fazem como querem.', author: 'Karl Marx' },
  { quote: 'Nenhuma sociedade pode florescer e ser feliz se a maior parte de seus membros for pobre e miserável.', author: 'Adam Smith' },
  { quote: 'A liberdade consiste em fazer tudo o que não prejudique o próximo.', author: 'Jean-Jacques Rousseau' },
  { quote: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.', author: 'Albert Einstein' },
  { quote: 'A história do mundo é o tribunal do mundo.', author: 'Friedrich Schiller' },
  { quote: 'O que somos é o resultado do que pensamos.', author: 'Buda' },
]

export async function GET() {
  const now = new Date()
  const day = now.getDate()
  const index = (day - 1) % frases.length
  return NextResponse.json(frases[index])
}
