import { useState } from 'react'

const tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1", id: 1 },
  { date: "2023-09-01", views: 100, article: "Article 1", id: 2 },
  { date: "2023-09-02", views: 150, article: "Article 2", id: 3 },
  { date: "2023-09-02", views: 120, article: "Article 3", id: 4 },
  { date: "2020-09-03", views: 200, article: "Article 4", id: 5 }
]

function App() {

  const [filtered, setFiltered] = useState(tableData)

  const filterByViews = () => {

    setFiltered(prev => [...prev].sort((a, b) => {

      if (b.views > a.views) {
        return 1
      }
      else if (a.views == b.views) {
        const date1 = new Date(a.date).getTime()
        const date2 = new Date(b.date).getTime()
        return date2 - date1

      }
      else {
        return -1
      }

    }))

  }

  const filterByDate = () => {
    setFiltered(prev => [...prev].sort((a,b) => {
      
      const date1 = new Date(a.date).getTime()
      const date2 = new Date(b.date).getTime()

      if(date1 != date2){
        return date2 - date1
      }
      else{
        return b.views - a.views
      }

    }))
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      <button onClick={filterByDate}>Sort by Date</button>

      <button onClick={filterByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
