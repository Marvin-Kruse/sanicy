import { AppBar, Icon, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar position='static'>
                    <Toolbar>
                        <Link href='/dashboard' style={{textDecoration: 'none'}}>
                            <IconButton>
                                <div className='d-flex'>
                                    <Image src='/branding/logo.png' width={32} height={32} alt='logo' />
                                    <h2>Sanicy</h2>
                                </div>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>

        </div>
    )
}