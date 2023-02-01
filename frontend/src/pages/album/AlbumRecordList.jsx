import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlbumRecordItem from './AlbumRecordItem';

export default function AlbumRecord() {
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
        <Typography variant="h3">제주도 여행</Typography>
        <Typography variant="h6" sx={{ color: 'gray' }}>
          2023-01-01 ~ 2023-01-03
        </Typography>
      </Box>
      {records.map((record) => (
        <AlbumRecordItem key={record.recordId} record={record}></AlbumRecordItem>
      ))}
    </>
  );
}
