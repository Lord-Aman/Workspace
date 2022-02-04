import react, {useState} from 'react'

function App(){
  const [field,setField] = useState('');
  const [condition, setCondition] = useState('');
  const [offer, setOffer] = useState('');

  const fields = ['Theme', 'Sub-theme','Reason','Language','Source', 'Rating','Time Period', 'Customer ID'];
  const conditions = ['Equals','Does not equal','Like','Not Like','Is Empty', 'Is', 'Is not'];
  const criterias = ['Offers','Performance','Platform','Product Feedback'];

  
  
}

export default App;