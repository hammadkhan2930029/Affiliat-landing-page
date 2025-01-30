import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import bird1 from '../../assets/image/bird1.jpg';
import bird2 from '../../assets/image/bird2.jpg';

import bird3 from '../../assets/image/bird3.jpg';

import './cards.css'

export const Cards = () => {
    return (
        <div className="cardsMian">
            <div className='cards'>


                <Card sx={{ maxWidth: 345 }} style={{borderRadius:15}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={bird1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className='cards'>

                <Card sx={{ maxWidth: 345 }} style={{borderRadius:15}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={bird2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className='cards'>

                <Card sx={{ maxWidth: 345 }} style={{borderRadius:15}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={bird3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>

        </div>
    );
}
