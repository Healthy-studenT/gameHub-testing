import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
    const {games, error, isLoading} = useGames()
    const skeletons = Array.from({ length: 10 }, (_, index) => index + 1)

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl:5 }} spacing={10} padding='10px'>
          {isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
          {games.map(game => <GameCard game={game}></GameCard>)}
        </SimpleGrid>
    </>
  )
}

export default GameGrid 