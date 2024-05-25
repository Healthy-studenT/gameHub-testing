import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatForms'

const PlatformSelector = () => {

    const {data, error} = usePlatforms()
    if (error) {
        return null
    }
  return (
    <Menu>
        <MenuButton as={Button}>Platforms</MenuButton>
        <MenuList>
            {data.map(p => <MenuItem key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector