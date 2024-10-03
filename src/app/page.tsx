
export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>음식 카테고리 선택하기</h1>
      <div>
        <button onClick={() => handleSelection('중식')}>중식</button>
        <button onClick={() => handleSelection('일식')}>일식</button>
        <button onClick={() => handleSelection('한식')}>한식</button>
      </div>
      {selectedFood && (
        <h2>선택한 음식: {selectedFood}</h2>
      )}
    </div>
  );
}
