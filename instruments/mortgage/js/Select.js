
const  { Select } =  window.antd;
const Option = Select.Option;
const { InputGroup } = window.antd.Input.Group;

const Autocomplete = ({ labelStyle }) => {

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    function handleBlur() {
      console.log('blur');
    }

    function handleFocus() {
      console.log('focus');
    }

    return(

      <Form.Item>
        <label htmlFor="type" style={labelStyle}>Тип квартиры:</label>
        <Select
          size="large"
          defaultValue='new_apartment'
          id={'type'}
          showSearch
          placeholder="Выберите вид"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="new_apartment">Квартира в новостройке</Option>
          <Option value="old_apartment">Готовая квартира</Option>
          <Option value="house">Загородный дом</Option>
        </Select>
      </Form.Item>
    ) 
}