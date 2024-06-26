import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatForms'
import { Platform } from '../hooks/useGames'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const {data, error} = usePlatforms()
    if (error) {
        return null
    }
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
            {data.map(p => <MenuItem onClick={() => onSelectPlatform(p)} key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector