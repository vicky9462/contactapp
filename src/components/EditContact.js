import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function EditContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const contacts = useSelector(state => state);
  // console.log(contacts);
  const currentContact = contacts.find(contact => contact.id === parseInt(id));
  console.log(currentContact)

  useEffect(() => {
  if(currentContact){
    setName(currentContact.name);
    setEmail(currentContact.email)
    setPhone(currentContact.phone)
  }
   
  }, [currentContact])

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit Students{id}</h1>
          <div className="row">
            <div className="col-md-6  shadow mx-auto p-5">
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full name"
                    value={name}
                onChange={(e) => setName(e.target.value)}
              
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email" 
                    placeholder="Email"
                    value={email}
                onChange={(e) => setEmail(e.target.value)}
            
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone"
                    value={phone}
                onChange={(e) => setPhone(e.target.value)}
           
                  />
                </div>
                <div className="form-group">
                  <input
                    className="btn btn-dark"
                    type="submit"
                    value="Update Student"
                  />
                  <Link to="/" className='btn btn-danger ml-5'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>

        </>
      ) : (
        <h1 className='display-3 my-5 text-center'>Student contact with id {id} does not exists</h1>
      )}
    </div>
  );
};

export default EditContact;
