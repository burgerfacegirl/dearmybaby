import LinkManager from '@/commons/components/LinkManager';


const HeadBar = () => {
  const HeadBarStyle = {
    textAlign: 'center',
  }

  return <div>
    <div style={HeadBarStyle}>
      <LinkManager />
    </div>
  </div>
}
export default HeadBar;