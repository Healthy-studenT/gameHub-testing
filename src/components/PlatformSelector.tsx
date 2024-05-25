import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatForms'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelectPlatform: (platform: Platform) => void
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {

    const {data, error} = usePlatforms()
    if (error) {
        return null
    }
  return (
    <Menu>
        <MenuButton as={Button}>Platforms</MenuButton>
        <MenuList>
            {data.map(p => <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector