import AlbumRecordList from './AlbumRecordList';

export default function Album() {
  const records = [
    {
      recordId: 1,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
    {
      recordId: 2,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
    {
      recordId: 3,
      dayCount: 1,
      recordType: 0,
      recordFile: 'https://picsum.photos/200',
      lat: '37.49772884365532',
      lng: '127.04486129289809',
    },
  ];
  return (
    <div>
      <h1>album</h1>
      <AlbumRecordList records={records}></AlbumRecordList>
    </div>
  );
}
