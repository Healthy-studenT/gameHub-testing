import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const GameGrid = () => {
    const {data, error, isLoading} = useGames()
    const skeletons = Array.from({ length: 20 }, (_, index) => index + 1)

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5 }} spacing={3} padding='10px'>
          {isLoading && skeletons.map(s => <GameCardContainer><GameCardSkeleton key={s} /></GameCardContainer>)}
          {data.map(game => <GameCardContainer><GameCard game={game}></GameCard></GameCardContainer>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid 