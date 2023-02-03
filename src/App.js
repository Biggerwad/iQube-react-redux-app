import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData  } from "./actions/actionFile";
import './App.css';

function App({data, fetchData}) {
  useEffect(() => {
    fetchData();
  }, [fetchData])

  const mapStateProps = state => ({
    data:state.data
  })

  const mapDispatchToProps = dispatch => ({
    fetchData:() => dispatch(fetchData())
  })

  return (
    <div className="App">
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.state}</h3>
          <p>Confirmed Cases:{item.confirmedCases}</p>
          <p>Active Cases:{item.activeCases}</p>
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateProps,mapDispatchToProps(App))