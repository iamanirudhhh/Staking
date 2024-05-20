import { useState,useEffect } from 'react';
import { Box, Button, Grid, Stack, styled, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ethers } from "ethers";
import tokenBalance from '../assets/ri_1.png';
import stakedImg from '../assets/ri2.png';
import claimableReward from '../assets/ri3.png';
import cardOne from '../assets/card_1_bg.jpg';
import cardTwo from '../assets/card_2_bg.jpg';
import cardThree from '../assets/card_3_bg.jpg';
import tokenData  from '../components/Contract.json';
import stakingData  from '../components/StakingContract.json';

export default function Staking() {

    // const [connectedAddress, setConnectedAddress] = useState(null);
    // const [tokenImported, setTokenImported] = useState(false); 
    // const [showStakeForm, setShowStakeForm] = useState(true);
    // const [showUnstakeForm, setShowUnstakeForm] = useState(false);
    // const [showClaimRewardForm, setShowClaimRewardForm] = useState(false);
    // const [userTotalDscBalance, setUserTotalDscBalance] = useState();
    // const [userStakedToken, setUserStakedToken] = useState();
    // const [userClaimableTokens, setUserClaimableTokens] = useState();
    // const [unStakeToken, setUnStakeToken] = useState();


    // let userAddress;

    // useEffect(() => {
    //     if (!connectedAddress) {
    //         connectToMetaMask();
    //     } 
    //     else if (connectedAddress) 
    //     {

    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = provider.getSigner();    
    //         userAddress = connectedAddress;
    //         let USERADDRESS = userAddress;
    //         console.log(USERADDRESS);
    //         const fetchData = async () => {
    //         try {
    //           const DscAddress = tokenData.Dscaddress;
    //           const DscABI = tokenData.abi;
    //           const DscStakingAddress = stakingData.address;
    //           const DscStakingABI = stakingData.abi;
    //           const dscInstance = new ethers.Contract(
    //             DscAddress,
    //             DscABI,
    //             signer
    //           );
    //           const stakingInstance = new ethers.Contract(
    //             DscStakingAddress,
    //             DscStakingABI,
    //             signer
    //           );
    //           const userTokenBalance = await dscInstance.balanceOf(USERADDRESS);
    //           const formattedBalance = ethers.utils.formatUnits(userTokenBalance);
    //           setUserTotalDscBalance(formattedBalance);
    //           const userStakedTokens =
    //             await stakingInstance.AddressToStakingDetails(USERADDRESS);
    //           const finalTotalStakedTokens = ethers.utils.formatUnits(
    //             userStakedTokens.stakedAmount
    //           );
    //           setUserStakedToken(finalTotalStakedTokens);
    //           const finalClaimableTokens = ethers.utils.formatUnits(
    //             userStakedTokens.claimableRewards
    //           );
    //           let resultString = finalClaimableTokens.toString().slice(0, 8);
    //           setUserClaimableTokens(resultString);
    //         } catch (error) {
    //           console.error("Error fetching data:", error.message);
    //         }
    //       };
    //       fetchData();
    //     }
    //   }, [userTotalDscBalance, userStakedToken, userClaimableTokens, connectedAddress]);

    // const stakeTokens = async () => {
    //     if (!connectedAddress ||!userStakedToken) {
    //         alert("error");
    //     }

    //     // Create a provider and signer
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();

    //     // Instantiate the token contract
    //     const tokenContract = new ethers.Contract(tokenData.Dscaddress, tokenData.abi, signer);

    //     // Approve the staking contract to spend tokens on behalf of the user
    //     const amountInWei = ethers.utils.parseEther(userStakedToken);
    //     console.log(amountInWei);
    //     const approvalTx = await tokenContract.approve(stakingData.address, amountInWei);
    //     await approvalTx.wait();

    //     // Instantiate the staking contract
    //     const stakingContract = new ethers.Contract(stakingData.address, stakingData.abi, signer);
        
    //     // Stake the approved amount of tokens
    //     const stakeTx = await stakingContract.stakeTokens(amountInWei);
    //     await stakeTx.wait();

    //     console.log(`Successfully staked ${amountInWei} tokens.`);
    // };

    // const updaterewards = async () => {
    //     try {

    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = provider.getSigner();
    
    //       const DscStakingAddress = stakingData.address;
    //       const DscStakingABI = stakingData.abi;
    //       const stakingInstance = new ethers.Contract(
    //         DscStakingAddress,
    //         DscStakingABI,
    //         signer
    //       );
    //       await stakingInstance.calcuateRewards(connectedAddress);
    //       const userStakedTokens = await stakingInstance.AddressToStakingDetails(
    //         connectedAddress
    //       );
    //       const finalClaimableTokens = ethers.utils.formatUnits(
    //         userStakedTokens.claimableRewards
    //       );
    //       let resultString = finalClaimableTokens.toString().slice(0, 8);
    //       if (resultString > 0) {
    //         setUserClaimableTokens(resultString);
    //       } else setUserClaimableTokens("0.0");
    //     } catch (err) {
    //       console.log("error", err.message);
    //     }
    //   };

    // const unStakeTokens = async () => {
    // try {
    //     if (!connectedAddress ) {
    //         connectToMetaMask();
    //     }
    //     // console.log("Inside Unstaking..")
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();

    //     const DscStakingAddress = stakingData.address;
    //     const DscStakingABI = stakingData.abi;
    //     const stakingInstance = new ethers.Contract(
    //         DscStakingAddress,
    //         DscStakingABI,
    //         signer
    //     );

    //     const amountToUnstake = unStakeToken;
    //     const amountToUnstakeInWei = ethers.utils.parseEther(
    //     amountToUnstake.toString()
    //     );
    //     await stakingInstance.unStakeTokens(amountToUnstakeInWei);
    //     setUnStakeToken(" ");
    // } catch (err) {
    //     console.log("error", err.message);
    // }
    // };
    
    // const claimRewards = async () => {
    // try {
    //     if (!connectedAddress ) {
    //         connectToMetaMask();
    //     }
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();
        

    //     const DscAddress = tokenData.Dscaddress;
    //     const DscABI = tokenData.abi;
    //     const DscStakingAddress = stakingData.address;
    //     const DscStakingABI = stakingData.abi;
    //     const stakingInstance = new ethers.Contract(
    //         DscStakingAddress,
    //         DscStakingABI,
    //         signer
    //     );
        
    //     const amountToClaim = userClaimableTokens;
    //     const amountToClaimInWei = ethers.utils.parseEther(
    //     amountToClaim.toString(),
    //     );
    //     console.log(amountToClaimInWei);
    //     await stakingInstance.claimRewards(amountToClaimInWei);
    //     setClaimToken(" ");
    // } catch (error) {}
    // };

    // const handleButtonClick = () => 
    //     {
    //     if (connectedAddress) {
    //         disconnectFromMetaMask();
    //     } else {
    //         connectToMetaMask();
    //     }
    // };

    // const connectToMetaMask = async () => {
    //     try {
    //         if (window.ethereum) {
    //             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //             console.log("MetaMask connected!");
    //             setConnectedAddress(accounts[0]);
    //         }
    //     } catch (error) {
    //         console.error("Error connecting to MetaMask:", error);
    //     }
    // };

    // const addTokenToMetaMask = async () => {
    //     try {
    //         if (!connectedAddress) {
    //             console.log("Please connect to MetaMask first.");
    //             return;
    //         }
            
    //         if (!window.ethereum || !window.ethereum.isMetaMask) {
    //             console.log("MetaMask is not installed.");
    //             return;
    //         }

    //         await window.ethereum.request({
    //             method: 'wallet_watchAsset',
    //             params: {
    //                 type: 'ERC20',
    //                 options: {
    //                     address: "0xbf7f01B763B1486F6CAc76464334a1E02A490B1A", 
    //                     symbol: 'DSC' , 
    //                     decimals: 18, 
    //                 }
    //             }
    //         });

    //         console.log("Token added to MetaMask successfully.");
    //         setTokenImported(true); 
    //     } catch (error) {
    //         console.error("Error adding token to MetaMask:", error);
    //         alert("Failed to add token. Please try again.");
    //     }
    // };

    // const disconnectFromMetaMask = () => {
    //     setConnectedAddress(null);
    //     setTokenImported(false); 
    //     setUserTotalDscBalance(null);
    //     console.log("Disconnected from MetaMask");
    // };
    

    // const showStakeFormHandler = () => {
    //     setShowStakeForm(true);
    //     setShowUnstakeForm(false);
    //     setShowClaimRewardForm(false);
    // };

    // const showUnstakeFormHandler = () => {
    //     setShowStakeForm(false);
    //     setShowUnstakeForm(true);
    //     setShowClaimRewardForm(false);
    // };

    // const showClaimRewardFormHandler = () => {
    //     setShowStakeForm(false);
    //     setShowUnstakeForm(false);
    //     setShowClaimRewardForm(true);
    // };


    return (
        <>
        <h2>hello</h2>
            {/* <Stack marginTop={3} spacing={5} direction="row" justifyContent="flex-end" paddingRight={5}>
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
                                    <div style={{ display:"flex", justifyContent: "space-between"}}>
                                        <img
                                            src={tokenBalance}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft:'30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2 style={{ marginRight: '30px', marginTop: '25px', marginBottom: '15px' }}>
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
                                    <div style={{display:"flex", justifyContent: "space-between"}}>   
                                        <img
                                            src={stakedImg}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft: '30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2 style={{ marginRight: '30px', marginTop: '25px', marginBottom: '15px' }}>
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
                                <div className="card-bodys c_bg_3 mb-0 card-body_img" style={{ backgroundImage: `url(${cardThree})`, width:350, height: 170, borderRadius: '20px' }}>
                                    <div style={{display:"flex", justifyContent: "space-between"}}>
                                        <img
                                            src={claimableReward}
                                            width="50"
                                            alt=""
                                            className="img-fluid"
                                            style={{ marginLeft: '30px', marginTop: '25px', marginBottom: '15px' }}
                                        />
                                        <h2 style={{ marginRight: '30px', marginTop: '25px', marginBottom: '15px' }}>
                                            {" "}
                                            <b>
                                            {userClaimableTokens == undefined
                                                ? 0
                                                : userClaimableTokens }
                                            </b>{" "}
                                        </h2>
                                    </div>
                                    <span style={{ fontWeight: 'bold', marginLeft: '30px' }}> Your Claimable Reward</span>
                                    <RefreshButton variant="contained" onClick={() => updaterewards()}>Refresh</RefreshButton>
                                    <p style={{ marginLeft: '30px' }}> Note: Refreshing cost GAS Fee </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={7} display="flex" justifyContent="center" alignItems="center">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '80vh' }}>
                            <div style={{marginBottom:30}}>
                                <Stack spacing={2} direction="row">
                                    <FeatureButton variant="contained" active={showStakeForm}  onClick={showStakeFormHandler}>Stake</FeatureButton>
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
                                            onChange={(e) => setUserStakedToken(e.target.value)}
                                        />
                                        <StakeButton onClick={connectedAddress ? stakeTokens : connectToMetaMask} variant="contained">Stake</StakeButton>
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
                                            onChange={(e) => setUnStakeToken(e.target.value)}
                                        />
                                        <StakeButton onClick={connectedAddress ? unStakeTokens : connectToMetaMask} variant="contained">Unstake</StakeButton>
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
                                            onChange={(e) => setUserClaimableTokens(e.target.value)}
                                        />
                                        <StakeButton onClick={connectedAddress ? claimRewards : connectToMetaMask} variant="contained">Claim</StakeButton>
                                    </Stack>
                                </div>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </Box> */}
            
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

const RefreshButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#A43771',
    '&:hover': {
        backgroundColor: '#A43771',
    },
    width: 90,
    height: 30,
    marginLeft: 20,
    textTransform: 'none'
}));
