import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';



// const CardsList = () => {
//   const cardDataList = useSelector((state) => state.cardDataList);


  function CardList() {
    

    return (
<div className='App'>
  
</div>
    // <div>
    //   {cardDataList.map((cardData) => (
    //     <Card key={cardData.id}>
    //       <CardMedia component="img" height="140" image={cardData.photo} alt={cardData.name} />
    //       <CardContent>
    //         <Typography variant="h5" component="div">
    //           {cardData.name}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           {cardData.description}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           Age: {cardData.age}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           Meet Price: {cardData.meet_price}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           Likes: {cardData.likes}
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   ))}
    // </div>
    )
};



export default CardList;