export default function Day() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth()+1;
  const day = new Date().getDate();
  
  return <h3 className="day">{`${year}年${month}月${day}日`}</h3>;
}
