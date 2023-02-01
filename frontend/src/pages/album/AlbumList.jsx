import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';

export default function AlbumList() {
  const records = [
    {
      recordId: 1,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: 37.4977288,
      lng: 127.0448612,
    },
    {
      recordId: 2,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: 37.4967288,
      lng: 127.0448612,
    },
    {
      recordId: 3,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: 37.4987288,
      lng: 127.0448612,
    },
  ];
  return (
    <>
      <Box p={2}>
        <Typography variant="h3">내 여행 기록들</Typography>
      </Box>
      <List>
        {records.map((record) => (
          <ListItem
            key={record.recordId}
            secondaryAction={
              <IconButton component={Link} to="map" edge="end" aria-label="to-map">
                <MapIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton component={Link} to="view">
              <ListItemAvatar>
                <Avatar src="https://picsum.photos/200"></Avatar>
              </ListItemAvatar>
              <ListItemText primary="제주도 여행" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
