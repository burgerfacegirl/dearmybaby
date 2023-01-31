import { records } from './props';
import AlbumRecordItem from './AlbumRecordItem';

export default function AlbumRecord({ records }) {
  return (
    <>
      <h1>AlbumRecord</h1>
      {records.map((record) => (
        <AlbumRecordItem key={record.recordId} record={record}></AlbumRecordItem>
      ))}
    </>
  );
}

AlbumRecord.propTypes = {
  records,
};
