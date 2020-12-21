import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#32E0C4',
            light: '#5be6cf',
            dark: '#239c89',
            contrastText: "#ffffff"
        },
        secondary: {
            main: '#FFA36C',
            light: '#ffb589',
            dark: '#b2724b',
            contrastText: '#ffffff'
        },
        error: {
            main: '#DD2C00',
        },
        grey: {
            900: '#222831',
            800: '#393E46',
            700: '#C4C4C4',
            600: '#EEEEEE',
        }
    },
    background: {
        default: "#EEEEEE"
    },
    typography: {
        h1: {
            fontFamily: 'Rubik',
            fontWeight: '900',
            fontSize: '4rem'
        },
        h2: {
            fontFamily: 'Rubik',
            fontWeiht: '800'
        },
        h3: {

        },
        h4: {

        },
        h5: {

        },
        h6: {

        },
        button: {
            fontFamily: 'Rubik',
            fontSize: '1.5rem'
        }
    }
});
