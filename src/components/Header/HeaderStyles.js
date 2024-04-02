import { styled } from '@mui/system';

// Estilos para el Toolbar utilizando styled de @mui/system
const StyledToolbar = styled('div')({
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'px solid lightgray',
});

// Estilos para la imagen utilizando styled de @mui/system
const StyledImg = styled('img')({
    width: '100px',
    objectFit: 'contain',
    height: 'auto',
    borderRadius: '60%',
});

// Estilos para el InputBase utilizando styled de @mui/system
const StyledInputBase = styled('input')({
    fontSize: '1.2rem',
    padding: '10px',
    color: 'black', 
    border: '1px solid lightgray',
    borderRadius: '999px'
});

const StyledStack = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    border: '1px solid lightgray',
    borderRadius: '999px',
    padding: '5px',
    margin: '10px',
    minWidth: '250px'
})

export { StyledToolbar, StyledImg, StyledInputBase, StyledStack };
