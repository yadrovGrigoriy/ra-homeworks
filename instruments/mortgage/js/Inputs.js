
const { Input } = window.antd
const InputGroup = Input.Group

const Inputs = ({ labelStyle }) => (
  
  <InputGroup size='large'>
      <Form.Item>
        <label htmlFor="price" style={labelStyle}>Стоимость:</label>
        <Input
          defaultValue={2000000} 
          placeholder={2000000}
          id={"price"}
          type={'number'}
        />
      </Form.Item>
      <Form.Item>
        <label htmlFor="money" style={labelStyle}>На руках:</label>
        <Input
          placeholder={200000} 
          defaultValue={200000} 
          id={"money"}
          type={'number'}
        />
      </Form.Item>
      <Form.Item>
        <label htmlFor="duration" style={labelStyle}>Срок кредита:      </label>
        <Input
          defaultValue={5}
          placeholder={5} 
          id={"duration"}
          type={'number'}
          />
      </Form.Item>
  </InputGroup>

);
