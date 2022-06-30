// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardHeader from '@mui/material/CardHeader';

// export default function LegoSetCard(props) {
//   return (
//     <Card sx={{ maxWidth: 345, minHeight: 600 }}>
//         <CardHeader title={props.setName} subheader="21026-1"/>
//       <CardMedia
//         component="img"
//         height="500px"
//         image={props.image}
//         alt=""
//       />
//       <CardContent>
//         <Typography>Year: {props.setYear}</Typography>
//         <Typography>Number Of Pieces: {props.numOfPieces}</Typography>
//       </CardContent>
//     </Card>
//   )
// }

import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LegoSetCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 'auto' }}>
      <CardHeader
        title={props.setName}
        subheader={props.setNum}
      /> 
      {
        props.image !== null ? <CardMedia
        component="img"
        height="100%"
        image={props.image}
        alt=""
        /> : null
      }
     
      <CardContent>
            <Typography>Year: {props.setYear}</Typography>
            <Typography>Number Of Pieces: {props.numOfPieces}</Typography>
        </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{px: 2, py: 5}}>
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item sx={{display: "flex"}}>
                <CardMedia
                    component="iframe"
                    src={`https://www.brickeconomy.com/widget/set/${props.setNum}?chartontop=true`}
                    alt=""
                    sx={{borderColor: 'black', height: 200}}
                />
            </Grid>
        </Grid>
       
      </Collapse>
    </Card>
  );
}
