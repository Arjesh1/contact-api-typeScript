import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ContactDataType } from '../interface/interface';

interface Props {
    item: ContactDataType 
}

const ContactList:React.FC<Props> = ({item}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {item.name[0]}
          </Avatar>
        }
        
        title={item.name}
        subheader={item.email}
        
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default ContactList
