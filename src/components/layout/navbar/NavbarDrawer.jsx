import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const NavbarDrawer = ({navLinks}) => {
  return (
    <div>
        <Box sx={{width: 250}}>
            <nav>
                <List>
                    {navLinks.map((item)=>(
                        <ListItem key={item.title}>
                            <ListItemButton component="a" href={item.path}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    </div>
  )
}

export default NavbarDrawer