import { useState } from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export default function Staking () {

    const [connectedAddress, setConnectedAddress] = useState(null);

    const handleButtonClick = () => {
        if (connectedAddress) {
            disconnectFromMetaMask();
        } else {
            connectToMetaMask();
        }
    };

    const connectToMetaMask = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log("MetaMask connected!");
                setConnectedAddress(accounts[0]);
            }
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
    };

    const disconnectFromMetaMask = () => {
        setConnectedAddress(null);
        console.log("Disconnected from MetaMask");
    };

    return (
        <>
            <Stack spacing={2} direction="row">
                <ColorButton variant="contained"> Import Token To Wallet </ColorButton>
                <ColorButton variant="contained" onClick={handleButtonClick}> {connectedAddress ? ` ${connectedAddress.substring(0, 5)}...${connectedAddress.substring(connectedAddress.length - 5)}` : "Connect Wallet"}  </ColorButton>
            </Stack>
        </>
    );
}

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
    }, 
  }));