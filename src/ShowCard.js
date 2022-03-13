import axios from 'axios';
import React from 'react';
import Button from './button';

export default class ShowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      list: [],
      imageData: [],
      counter : 1,
      searchName: "",
      searchUsername: "",
      searchCompanyName: "",
    })
  }

  //api hitting to get image from this API
  // catchImage = () => {
  //   let url = 'https://jsonplaceholder.typicode.com/users';
  //   axios.get(url)
  //     .then(response => {
  //       this.setState({
  //         imageData: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log('error');
  //     })
  // }
  //api hitting
  catchData = (counter) => {
   // let url = '/users';
    axios.get(`http://localhost/users/?skip=${counter}`)
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(err => {
        console.log('error');
      })
  }
  
  componentDidMount() {
   // this.catchImage();
   this.catchData();
  }

  SearchFunction = (e) => {
    this.setState({
      searchName: e.target.value,
      searchUsername: e.target.value,
      searchCompanyName: e.target.value,
    })
  }
  previousFunction = ()=> {
   
     this.state.counter = this.state.counter - 1;
     
      if(this.state.counter < 1)
      { 
        this.setState({
          counter : 10,
        })
      }else{
      this.catchData(this.state.counter);
      }
  }
  nextFunction = ()=> {
   
    this.state.counter = this.state.counter + 1;
  
    if(this.state.counter > 10)
    { 
      this.setState({
        counter : 1,
      })
    }else{
    this.catchData(this.state.counter);
    }
  }

  
  render() {   
   
   
    //console.log('response', this.state.list);
    //  let filteredPost = this.state.list.filter((item) =>  item.id == this.state.searchName );
    //  || item.id.match(this.state.searchName) !== null)
      // || item.company.name.toLocaleLowerCase().match(this.state.searchCompanyName.toLocaleLowerCase()) !== null);
   //console.log('search Result', filteredPost);
   console.log(this.state.list);
   const usernameImage = this.state.list.map((imgData)=> imgData["id"]);
    console.log('image', usernameImage);
    return (
      <>
        
        <h3 >Hello Harbir</h3>
        {/* <input className='form-control my-2' value={this.state.searchName} onChange={(e) => { this.SearchFunction(e) }} placeholder="Search Name Username or Companyname" style={{ width:'75rem', marginLeft: '10rem', marginRight:'17rem'}} /> */}
        <div className='container' >
           <div className="row mx-5">
          <Button Previous previousFunction />
        <button type="button" className="btn btn-primary col ms-2 mb-2" onClick={ this.nextFunction } >Next</button>
        </div>
        </div>
          {this.state.list.map((item, i) => {
            //destructuring
            const { id, userId, title, body } = item;
            

            return (
            
              <div className='container' key={i}>
                <div className="card mx-5 shadow p-3 mb-3 bg-white rounded" >
                  <div className="row">
                    <div className="col-auto">            
                    {/* https://avatars.dicebear.com/api/avataaars/1.svg                  */}
                      <img src={`https://avatars.dicebear.com/api/avataaars/${usernameImage[i]}.svg`} className="img-fluid rounded-start my-1" alt={`${i}`} style={{ height: "180px", width: "180px" }} />
                    </div>
                    <div className="col-auto ">
                      <div className="card-body py-2">
                        <h2 className="card-title ">{id}</h2>
                        <div className="card-text"><strong>userId: </strong>{userId}</div>
                        <div className="card-text"><strong>title: </strong>{title}</div>
                        <div className="card-text"><strong>body: </strong>{body}</div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )

          })}
          
        </>
        )
  
}

}

//   //console.log('response', this.state.list);
//   let filteredPost = this.state.list.filter((item) =>item.username.toLocaleLowerCase().match(this.state.searchUsername.toLocaleLowerCase())  !== null 
//   || item.name.toLocaleLowerCase().match(this.state.searchName.toLocaleLowerCase()) !== null || item.company.name.toLocaleLowerCase().match(this.state.searchCompanyName.toLocaleLowerCase()) !== null);
//  //console.log('search Result', filteredPost);
//   return (
//     <>
//       <input className='form-control my-2' value={this.state.searchUsername} onChange={(e) => { this.SearchFunction(e) }} placeholder="Search Name Username or Companyname" style={{ width:'75rem', marginLeft: '10rem', marginRight:'17rem'}} />
       
//         {filteredPost.map((item, i) => {
//           //destructuring
//           const { name, email, phone, company, website, username, address } = item;
//           const { street, suite, city, zipcode } = address;
//           const { name: companyName } = company;

//           return (
//             <div className='container' key={i}>
//               <div className="card mx-5 shadow p-3 mb-3 bg-white rounded" >
//                 <div className="row">
//                   <div className="col-auto">
//                     <img src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} class="img-fluid rounded-start my-1" alt={`${username}`} style={{ height: "180px", width: "180px" }} />
//                   </div>
//                   <div className="col-auto ">
//                     <div className="card-body py-2">
//                       <h2 className="card-title ">{name}</h2>
//                       <div className="card-text"><strong>Email: </strong>{email}</div>
//                       <div className="card-text"><strong>Phone: </strong>{phone}</div>
//                       <div className="card-text"><strong>Company: </strong>{companyName}</div>
//                       <div className="card-text"><strong>Website: </strong>{website}</div>
//                       <div className="card-text"><strong>Address: </strong> {street + ', ' + suite + ', ' + city + ', ' + zipcode}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )

//         })}
//       </>
//       )