import * as React from 'react';
import { Button, CardActions, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import blockImage from "../assets/block-rewards.webp";
import lineImage from "../assets/lines.jpg";

export default function Plans({ heading, data, goToMonthlyPlan }) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blockImage}
          alt="Block"
        />
        <CardContent sx={cardContentStyle}> 
          <Typography gutterBottom fontWeight="bold" color="black" variant="h4" component="div">
            {heading}
          </Typography>
          <Typography variant="h4" color="black">
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="large" sx={buttonStyle} onClick={goToMonthlyPlan}>
          STAKE
        </Button>
      </CardActions>
    </Card>
  );
}

const cardContentStyle = {
  backgroundColor: 'transparent', 
  backgroundImage: `url(${lineImage})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '5px', 
  padding: '20px',
  color: 'white', 
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgreen', 
  }
};
