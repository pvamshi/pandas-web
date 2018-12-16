// import React from 'react';

// const DatafileContainer = ({ files, isFetching, fileSelect }) =>
//   isFetching ? (
//     <p>Fetching data</p>
//   ) : (
//     <Menu>
//       {files.map((data, index) => (
//         <MenuItem
//           key={index}
//           text={data.name}
//           onClick={() => fileSelect(data.name)}
//         />
//       ))}
//     </Menu>
//   );

// export default DatafileContainer;

import React from 'react';
import Datafiles from './datafiles';
import DataTable from './DataTable';
import Layout from './layout';

// export  class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//     };
//     this.menuSelected = this.menuSelected.bind(this);
//   }

//   menuSelected(dataFile) {
//     fetch('http://localhost:5000/api/pandas/head?name=' + dataFile.name)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('data', data);
//         this.setState({ data });
//       });
//   }
//   render() {
//     return (
//       <Layout sidebarOpen={true} toggle={() => console.log('clicked')}>
//         <Datafiles menuSelected={this.menuSelected} />
//         {this.state.data && <DataTable data={this.state.data} />}
//       </Layout>
//     );
//   }
// }

const HomeContainer = ({ data }) => (
  <Layout sidebarOpen={true} toggle={() => console.log('clicked')}>
    <Datafiles />
    {data && <DataTable data={data} />}
  </Layout>
);

export default HomeContainer;
