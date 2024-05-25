import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
      )
}

export default SortSelector