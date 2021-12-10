import * as React from 'react';
import {Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export class NewsCard extends Component {
  
  render(){
    let{title,description,url,urltoImage} = this.props;
  return (
    <Card sx={{ maxWidth: 345, m: 2 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urltoImage}
          alt="news poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" value="know more" href={url} target="_blank" >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
}

export default NewsCard
