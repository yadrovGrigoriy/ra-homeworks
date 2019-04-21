
const { Form } = window.antd

const labelStyle={display:'block', fontSize:'25px'}

const MortgateCalculator = () => (
    <Form style={{ 
              margin:'10px auto',
              width: '40%'
            }}>
      <Autocomplete labelStyle={labelStyle}/>
      <Inputs labelStyle={labelStyle}/>
      <Button />
    </Form > 
);





  
