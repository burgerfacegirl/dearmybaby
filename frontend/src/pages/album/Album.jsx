import AlbumRecordList from './AlbumRecordList';
import AlbumMap from './AlbumMap';

export default function Album() {
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
    <div>
      <h1>album</h1>
      <AlbumMap records={records}></AlbumMap>
      <AlbumRecordList records={records}></AlbumRecordList>
    </div>
  );
}
