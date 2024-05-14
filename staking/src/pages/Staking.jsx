import { useState } from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function Staking() {

    const [connectedAddress, setConnectedAddress] = useState(null);
    const [showStakeForm, setShowStakeForm] = useState(false);

    const handleButtonClick = () => 
        {
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
            <Stack marginTop={3} spacing={5} direction="row" justifyContent="flex-end" paddingRight={5}>
                <ColorButton variant="contained"> Add Token To Wallet </ColorButton>
                <ColorButton variant="contained" onClick={handleButtonClick}>
                    {connectedAddress ? ` ${connectedAddress.substring(0, 5)}...${connectedAddress.substring(connectedAddress.length - 5)}` : "Connect Wallet"}
                </ColorButton>
            </Stack>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => setShowStakeForm(true)}>Stake</Button>
                    <Button variant="contained">Unstake</Button>
                    <Button variant="contained">Claim Reward</Button>
                </Stack>
            </div>

            {showStakeForm && (
                <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                    <p>Stake Token</p>
                    <TextField
                        sx={{ width: 500 }}
                        id="outlined-number"
                        label="Enter Amount"
                        type="number"
                    />
                    <StakeButton variant="contained">Stake</StakeButton>
                </Stack>
            )}           
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

const StakeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[800],
    },
    width: 500,
    textTransform: 'none'
}));
