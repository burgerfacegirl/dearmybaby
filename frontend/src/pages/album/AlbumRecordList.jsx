import PropTypes from 'prop-types';
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
  records: PropTypes.arrayOf(
    PropTypes.shape({
      recordId: PropTypes.number,
      dayCount: PropTypes.number,
      recordType: PropTypes.number,
      recordFile: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  ),
};
