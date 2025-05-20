import { useEffect, useState} from "react";

const Settings = () => {
    const [formData, setFormData] = useState({});
    

const url = bpasAdminSetting?.ajax_url;
const nonce = bpasAdminSetting?.nonce;   

const formSubmit = (e) => {
    e.preventDefault();
    
    fetch(`${url}?action=form_submit_data&submitnonce=${nonce}&title=${formData?.title}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
}

useEffect(() => {
    fetch(`${url}?action=get_form_data&nonce=${nonce}`)
    .then((res) => res.json())
    .then((data) => {
        setFormData(data.data);
    })
}, []);


  return <div className="mainFormArea">
    <form onSubmit={formSubmit}>
        <label> Title </label>
        <input name="title" value={formData?.title} onChange={e => setFormData({...formData, title:e.target.value}) } />
        <button> Submit </button>
    </form>
    </div>
}
export default Settings