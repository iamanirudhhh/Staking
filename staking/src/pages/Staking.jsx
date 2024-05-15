import { useState,useEffect } from 'react';
import Web3 from 'web3';
import { Box, Button, Grid, Stack, styled, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import tokenBalance from '../assets/ri_1.png';
import stakedImg from '../assets/ri2.png';
import claimableReward from '../assets/ri3.png';
import cardOne from '../assets/card_1_bg.jpg';
import cardTwo from '../assets/card_2_bg.jpg';
import cardThree from '../assets/card_3_bg.jpg';
import tokenData  from '../components/Contract.json';

export default function Staking() {

    const [connectedAddress, setConnectedAddress] = useState(null);
    const [tokenImported, setTokenImported] = useState(false); 
    const [showStakeForm, setShowStakeForm] = useState(true);
    const [showUnstakeForm, setShowUnstakeForm] = useState(false);
    const [showClaimRewardForm, setShowClaimRewardForm] = useState(false);
    const [userTotalDscBalance, setUserTotalDscBalance] = useState();
    const [userStakedToken, setUserStakedToken] = useState();
    const [userClaimableTokens, setUserClaimableTokens] = useState();

    useEffect(() => {
        if (connectedAddress &&!tokenImported) {
            const fetchTokenBalance = async () => {
                const web3 = new Web3(window.ethereum);
                const contractABI = tokenData.abi; 
                const contractAddress = tokenData.Dscaddress; 
                const contract = new web3.eth.Contract(contractABI, contractAddress);
                const balance = await contract.methods.balanceOf(connectedAddress).call();
                const truncatedBalance = balance.toString().slice(0, -18);
                setUserTotalDscBalance(truncatedBalance);
            };
            fetchTokenBalance();
        }
    }, [connectedAddress]);

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


    const addTokenToMetaMask = async () => {
        try {
            if (!connectedAddress) {
                console.log("Please connect to MetaMask first.");
                return;
            }
            
            if (!window.ethereum || !window.ethereum.isMetaMask) {
                console.log("MetaMask is not installed.");
                return;
            }

            await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: "0x95CCD7C892A71913a42A2e6FC7ba06B25a65dD90", 
                        symbol: 'DSC' , 
                        decimals: 18, 
                    }
                }
            });

            console.log("Token added to MetaMask successfully.");
            setTokenImported(true); 
        } catch (error) {
            console.error("Error adding token to MetaMask:", error);
            alert("Failed to add token. Please try again.");
        }
    };

    const disconnectFromMetaMask = () => {
        setConnectedAddress(null);
        setTokenImported(false); 
        setUserTotalDscBalance(null);
        console.log("Disconnected from MetaMask");
    };

    const showStakeFormHandler = () => {
        setShowStakeForm(true);
        setShowUnstakeForm(false);
        setShowClaimRewardForm(false);
    };

    const showUnstakeFormHandler = () => {
        setShowStakeForm(false);
        setShowUnstakeForm(true);
        setShowClaimRewardForm(false);
    };

    const showClaimRewardFormHandler = () => {
        setShowStakeForm(false);
        setShowUnstakeForm(false);
        setShowClaimRewardForm(true);
    };


    return (
        <>
            <Stack marginTop={3} spacing={5} direction="row" justifyContent="flex-end" paddingRight={5}>
                <ColorButton variant="contained" onClick={addTokenToMetaMask} disabled={tokenImported} > 
                    {tokenImported ? "Token Imported Successfully" : "Add DSC To Wallet"} 
                </ColorButton>
                <ColorButton variant="contained" onClick={handleButtonClick}>
                    {connectedAddress ? ` ${connectedAddress.substring(0, 5)}...${connectedAddress.substring(connectedAddress.length - 5)}` : "Connect Wallet"}
                </ColorButton>
            </Stack>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid xs={5} display="flex" justifyContent="center" alignItems="center">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-bodys c_bg_1 card-body_img" style={{ backgroundImage: `url(${cardOne})`, width:350, height: 150, marginBottom: '25px', borderRadius: '20px' }}>
                                    <div style={{gap:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                                        <img
                                            src={tokenBalance}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft: '30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2>
                                            {" "}
                                            <b>
                                            {userTotalDscBalance == undefined
                                                ? 0
                                                : userTotalDscBalance }
                                            </b>{" "}
                                        </h2>
                                    </div>
                                    <span style={{ fontWeight: 'bold', marginLeft: '30px' }}>Your Token Balance</span>
                                </div>
                                <div className="card-bodys c_bg_2 card-body_img" style={{ backgroundImage: `url(${cardTwo})`, width:350, height: 150, marginBottom: '25px', borderRadius: '20px' }}>
                                    <div style={{gap:200, display:"flex", justifyContent:"center", alignItems:"center"}}>   
                                        <img
                                            src={stakedImg}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft: '30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2>
                                            {" "}
                                            <b>
                                            {userStakedToken == undefined
                                                ? 0
                                                : userStakedToken }
                                            </b>{" "}
                                        </h2>
                                    </div>
                                    <span style={{ fontWeight: 'bold', marginLeft: '30px' }}>Your Token Staked</span>
                                </div>
                                <div className="card-bodys c_bg_3 mb-0 card-body_img" style={{ backgroundImage: `url(${cardThree})`, width:350, height: 150, borderRadius: '20px' }}>
                                    <div style={{gap:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
                                        <img
                                            src={claimableReward}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft: '30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2>
                                            {" "}
                                            <b>
                                            {userClaimableTokens == undefined
                                                ? 0
                                                : userClaimableTokens }
                                            </b>{" "}
                                        </h2>
                                    </div>
                                    <span style={{ fontWeight: 'bold', marginLeft: '30px' }}> Your Claimable Reward</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={7} display="flex" justifyContent="center" alignItems="center">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '80vh' }}>
                            <div style={{marginBottom:30}}>
                                <Stack spacing={2} direction="row">
                                    <FeatureButton variant="contained" active={showStakeForm} onClick={showStakeFormHandler}>Stake</FeatureButton>
                                    <FeatureButton variant="contained" active={showUnstakeForm} onClick={showUnstakeFormHandler}>Unstake</FeatureButton>
                                    <FeatureButton variant="contained" active={showClaimRewardForm} onClick={showClaimRewardFormHandler}>Claim Reward</FeatureButton>
                                </Stack>
                            </div>
                
                            {showStakeForm && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Stack spacing={2} direction="column">
                                        <p>Stake Token</p>
                                        <TextField
                                            sx={{ width: 500 }}
                                            id="outlined-number"
                                            label="Enter Amount"
                                            type="number"
                                        />
                                        <StakeButton variant="contained">Stake</StakeButton>
                                    </Stack>
                                </div>
                            )}

                            {showUnstakeForm && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Stack spacing={2} direction="column">
                                        <p>Unstake Token</p>
                                        <TextField
                                            sx={{ width: 500 }}
                                            id="outlined-number"
                                            label="Enter Amount"
                                            type="number"
                                        />
                                        <StakeButton variant="contained">Unstake</StakeButton>
                                    </Stack>
                                </div>
                            )}

                            {showClaimRewardForm && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Stack spacing={2} direction="column">
                                        <p>Claim Reward</p>
                                        <TextField
                                            sx={{ width: 500 }}
                                            id="outlined-number"
                                            label="Enter Amount"
                                            type="number"
                                        />
                                        <StakeButton variant="contained">Claim</StakeButton>
                                    </Stack>
                                </div>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Box>
            
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

const FeatureButton = styled(Button)(({ theme, active }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: active ? '#A43771'  : grey[900],
    '&:hover': {
        backgroundColor: active ? '#A43771' : grey[800],
    },
    width: 150,
    textTransform: 'none'
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
